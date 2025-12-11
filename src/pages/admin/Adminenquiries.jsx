import React, { useEffect, useState, useMemo } from "react";
import AdminLayout from "../../components/admin/Adminlayout";

const API_BASE = import.meta.env.VITE_API_URL;


export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null); // enquiry for modal view
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    fetchEnquiries();
  }, []);

  async function fetchEnquiries() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_BASE}/api/enquiries`);

      if (!res.ok) throw new Error("Failed to load enquiries");
      const data = await res.json();
      setEnquiries(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this enquiry? This action cannot be undone.")) return;
    try {
      const res = await fetch(`${API_BASE}/api/enquiries/${id}`, { method: "DELETE" });

      if (!res.ok) throw new Error("Delete failed");
      // optimistic update
      setEnquiries((s) => s.filter((e) => String(e._id) !== String(id)));
      if (selected && String(selected._id) === String(id)) setSelected(null);
    } catch (err) {
      alert("Could not delete: " + (err.message || "Unknown"));
    }
  }

  function exportCSV() {
    const rows = [
      ["Name", "Email", "Comment", "CreatedAt"],
      ...enquiries.map((e) => [e.name, e.email, (e.comment || "").replace(/\n/g, " "), e.createdAt || ""]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enquiries_${new Date().toISOString()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return enquiries;
    return enquiries.filter(
      (e) =>
        (e.name || "").toLowerCase().includes(q) ||
        (e.email || "").toLowerCase().includes(q) ||
        (e.comment || "").toLowerCase().includes(q)
    );
  }, [enquiries, search]);

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const paged = filtered.slice(start, start + perPage);

  return (
    <AdminLayout>

    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Newsletter</h1>
            <p className="text-sm text-gray-600">View messages submitted via your newsletter form.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search name, email or comment..."
              className="px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />
            <button onClick={exportCSV} className="px-3 py-2 rounded-md border hover:shadow">
              Export CSV
            </button>
            <button
              onClick={fetchEnquiries}
              className="px-3 py-2 rounded-md bg-white border hover:shadow"
              disabled={loading}
            >
              Refresh
            </button>
          </div>
        </header>

        <main>
          {loading ? (
            <div className="text-center py-12">Loading enquiries...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">Error: {error}</div>
          ) : enquiries.length === 0 ? (
            <div className="text-center py-12 text-gray-600">No enquiries yet.</div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full table-auto text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Comment</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paged.map((e) => (
                    <tr key={e._id} className="border-t hover:bg-gray-50">
                      <td className="p-3">{e.name}</td>
                      <td className="p-3">{e.email}</td>
                      <td className="p-3">{(e.comment || "").slice(0, 80)}{(e.comment||"").length>80?"...":""}</td>
                      <td className="p-3">{new Date(e.createdAt).toLocaleString()}</td>
                      <td className="p-3 flex gap-2">
                        <button
                          onClick={() => setSelected(e)}
                          className="px-2 py-1 rounded border text-sm"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(e._id)}
                          className="px-2 py-1 rounded border text-sm text-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex items-center justify-between p-4">
                <div className="text-sm text-gray-600">
                  Showing {start + 1} - {Math.min(start + perPage, filtered.length)} of {filtered.length}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    Prev
                  </button>
                  <div className="px-3 py-1 border rounded">{page} / {pages}</div>
                  <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    onClick={() => setPage((p) => Math.min(p + 1, pages))}
                    disabled={page === pages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Modal view */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{selected.name}</h2>
                  <p className="text-sm text-gray-600">{selected.email} • {new Date(selected.createdAt).toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleDelete(selected._id)} className="px-3 py-1 border rounded text-red-600">Delete</button>
                  <button onClick={() => setSelected(null)} className="px-3 py-1 border rounded">Close</button>
                </div>
              </div>

              <hr className="my-4" />

              <div className="whitespace-pre-wrap text-sm text-gray-800">{selected.comment}</div>
            </div>
          </div>
        )}
      </div>
    </div>
    </AdminLayout>
  );
}
