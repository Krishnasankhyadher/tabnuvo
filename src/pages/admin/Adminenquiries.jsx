import React, { useEffect, useState, useMemo } from "react";
import AdminLayout from "../../components/admin/Adminlayout";
import {
  Search,
  Download,
  RefreshCw,
  Trash2,
  X,
  ChevronRight,
  Calendar,
  Mail,
  User
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL;

export default function AdminNewsletter() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 'selected' controls the Right Slide-Over Drawer
  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    fetchSubscribers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ================= FETCH =================
  async function fetchSubscribers() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${API_BASE}/api/newsletter`);
      if (!res.ok) throw new Error("Failed to load newsletter subscribers");

      const data = await res.json();
      setSubscribers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Unknown error");
      setSubscribers([]);
    } finally {
      setLoading(false);
    }
  }

  // ================= DELETE =================
  async function handleDelete(id) {
    if (!window.confirm("Delete this subscriber? This action cannot be undone.")) return;

    try {
      const res = await fetch(`${API_BASE}/api/newsletter/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Delete failed");
      }

      // optimistic update
      setSubscribers((prev) => prev.filter((s) => s._id !== id));
      if (selected?._id === id) setSelected(null);
    } catch (err) {
      alert("Failed to delete subscriber: " + (err.message || "Unknown"));
    }
  }

  // ================= EXPORT CSV =================
  function exportCSV() {
    const rows = [
      ["Name", "Email", "CreatedAt"],
      ...subscribers.map((s) => [
        s.name || "",
        s.email || "",
        s.createdAt ? new Date(s.createdAt).toISOString() : "",
      ]),
    ];
    const csv = rows
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers_${new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/:/g, "-")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // ================= SEARCH =================
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return subscribers;

    return subscribers.filter(
      (s) =>
        (s.name || "").toLowerCase().includes(q) ||
        (s.email || "").toLowerCase().includes(q)
    );
  }, [subscribers, search]);

  // ================= PAGINATION =================
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const paged = filtered.slice(start, start + perPage);

  useEffect(() => {
    if (page > pages) setPage(pages);
  }, [pages, page]);

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER --- */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Newsletter Subscribers
              </h1>
              <p className="text-sm text-gray-500">
                Manage your mailing list
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Search */}
              <div className="relative flex-1 sm:flex-none">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search subscribers..."
                  className="w-full sm:w-64 pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b3fd0] focus:border-transparent outline-none text-sm bg-white"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={exportCSV}
                  className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Export</span>
                </button>
                <button
                  onClick={fetchSubscribers}
                  disabled={loading}
                  className="flex items-center gap-2 px-3 py-2 bg-[#5b3fd0] text-white rounded-lg text-sm font-medium hover:bg-[#4d35b0] transition-colors shadow-sm"
                >
                  <RefreshCw
                    size={16}
                    className={loading ? "animate-spin" : ""}
                  />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
              </div>
            </div>
          </header>

          {/* --- MAIN CONTENT --- */}
          <main>
            {loading ? (
              <div className="flex justify-center py-20 text-gray-400 animate-pulse">
                Loading data...
              </div>
            ) : error ? (
              <div className="text-center py-10 text-red-600 bg-red-50 rounded-lg border border-red-100">
                {error}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300 text-gray-500">
                No subscribers found.
              </div>
            ) : (
              <>
                {/* === DESKTOP VIEW (Table) === */}
                <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4">Subscriber</th>
                        <th className="px-6 py-4">Email Address</th>
                        <th className="px-6 py-4">Joined Date</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {paged.map((s) => (
                        <tr
                          key={s._id}
                          className="hover:bg-gray-50 transition-colors group"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-100">
                                {(s.name || "?").charAt(0).toUpperCase()}
                              </div>
                              <div className="font-semibold text-gray-900">
                                {s.name || "Unknown"}
                              </div>
                            </div>
                          </td>
                          <td
                            className="px-6 py-4 text-gray-600 cursor-pointer"
                            onClick={() => setSelected(s)}
                          >
                            {s.email}
                          </td>
                          <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                            {s.createdAt
                              ? new Date(s.createdAt).toLocaleDateString()
                              : "—"}
                          </td>
                          <td className="px-6 py-4 text-right space-x-3">
                            <button
                              onClick={() => setSelected(s)}
                              className="text-[#5b3fd0] hover:underline font-medium"
                            >
                              View
                            </button>
                            <button
                              onClick={() => handleDelete(s._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* === MOBILE VIEW (List) === */}
                <div className="md:hidden space-y-3">
                  {paged.map((s) => (
                    <div
                      key={s._id}
                      onClick={() => setSelected(s)}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 active:bg-gray-50 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        {/* Avatar */}
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 text-[#5b3fd0] flex items-center justify-center font-bold text-lg flex-shrink-0 border border-blue-100">
                          {(s.name || "?").charAt(0).toUpperCase()}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between mb-0.5">
                            <h3 className="font-semibold text-gray-900 truncate pr-2">
                              {s.name || "Unknown"}
                            </h3>
                            <span className="text-[10px] text-gray-400 whitespace-nowrap">
                              {s.createdAt
                                ? new Date(s.createdAt).toLocaleDateString(
                                    undefined,
                                    { month: "short", day: "numeric" }
                                  )
                                : ""}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 truncate">
                            {s.email}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-gray-300 ml-2" />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {pages > 1 && (
                  <div className="flex items-center justify-between mt-6 px-2">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-gray-600">
                      Page {page} of {pages}
                    </span>
                    <button
                      onClick={() => setPage((p) => Math.min(pages, p + 1))}
                      disabled={page === pages}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>

        {/* ============================================== */}
        {/* RIGHT SIDE SLIDEBAR (DRAWER)                   */}
        {/* ============================================== */}

        {/* 1. Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            selected ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSelected(null)}
        />

        {/* 2. Sliding Panel */}
        <div
          className={`
            fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-white shadow-2xl 
            transform transition-transform duration-300 ease-in-out
            ${selected ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {selected && (
            <div className="h-full flex flex-col">
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">
                  Subscriber Details
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 bg-white rounded-full text-gray-500 hover:text-gray-800 shadow-sm border border-gray-200 transition-transform hover:rotate-90"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* User Info Card */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-full bg-[#5b3fd0]/10 text-[#5b3fd0] flex items-center justify-center text-2xl font-bold">
                      {(selected.name || "?").charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {selected.name || "Unknown"}
                      </h3>
                      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">
                        Active Subscriber
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Mail size={16} className="text-gray-400" />
                      <a
                        href={`mailto:${selected.email}`}
                        className="hover:text-[#5b3fd0] hover:underline"
                      >
                        {selected.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Calendar size={16} className="text-gray-400" />
                      <span>
                        {selected.createdAt
                          ? new Date(selected.createdAt).toLocaleString()
                          : "Unknown Date"}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                       <User size={16} className="text-gray-400" />
                       <span>ID: <span className="text-xs font-mono text-gray-400">{selected._id}</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/30">
                <button
                  onClick={() => handleDelete(selected._id)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-red-200 text-red-600 font-medium rounded-xl hover:bg-red-50 transition-colors shadow-sm"
                >
                  <Trash2 size={18} />
                  Delete Subscriber
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}