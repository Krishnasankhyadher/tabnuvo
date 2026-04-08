import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/Adminlayout";
import { authFetch } from "../../utils/auth";

const API_BASE = import.meta.env.VITE_API_PAGEMETA;


const appRoutes = [
  "/", "/about", "/contact", "/services", "/social-media-marketing", "/seo",
  "/ui-ux-design", "/product-design", "/branding", "/blogs",
  "/paid-ads", "/business-consulting", "/ecommerce-management",
  "/software-development", "/content-management", "/Service-design",
  "/website-development", "/work", "/blog/:id"
];

export default function AdminSeo() {
  const [route, setRoute] = useState(appRoutes[0]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", keywords: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg("");
    setMeta(null);
    setForm({ title: "", description: "", keywords: "", favicon: "" });
    fetchMeta(route);
  }, [route]);

  async function fetchMeta(r) {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/route?route=${encodeURIComponent(r)}`);
      const data = await res.json();
      if (res.ok && data) {
        setMeta(data);
        setForm({
          title: data.title || "",
          description: data.description || "",
          keywords: data.keywords || "",
          favicon: data.favicon || ""
        });
        setMsg("SEO tags exist — you can edit them.");
      } else {
        setMeta(null);
      }
    } catch (e) {
      console.error(e);
      setMsg("Failed to load meta.");
    } finally { setLoading(false); }
  }

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return setMsg("Title required.");
    setMsg("");
    try {
      const method = meta && meta._id ? "PUT" : "POST";
      const url = meta && meta._id ? `${API_BASE}/${meta._id}` : API_BASE;
      const res = await authFetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ route, ...form })
      });
      const data = await res.json();
      if (res.ok) {
        setMeta(data);
        setMsg("Saved.");
      } else {
        setMsg(data.error || "Save failed.");
      }
    } catch (err) {
      console.error(err);
      setMsg("Error submitting.");
    }
  };

  const handleDelete = async () => {
    if (!meta?._id) return;
    if (!window.confirm("Delete SEO for this route?")) return;
    try {
      const res = await authFetch(`${API_BASE}/${meta._id}`, { method: "DELETE" });
      if (res.ok) {
        setMsg("Deleted.");
        setMeta(null);
        setForm({ title: "", description: "", keywords: "" });
      } else {
        const d = await res.json();
        setMsg(d.error || "Delete failed.");
      }
    } catch (e) { console.error(e); setMsg("Delete error."); }
  };

  return (
    <AdminLayout>

      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Manage SEO (title, description, keywords)</h2>

        <form onSubmit={handleSubmit} className="space-y-4 md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-2">
            <label className="block font-medium">Choose Page</label>
            <select value={route} onChange={(e) => setRoute(e.target.value)} className="w-full p-2 border rounded">
              {appRoutes.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            {msg && <div className="text-sm text-red-600 mt-1">{msg}</div>}
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium">Favicon URL</label>
            <input
              name="favicon"
              value={form.favicon || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="https://example.com/favicon.png"
            />
          </div>


          <div>
            <label className="block font-medium">Meta Title *</label>
            <input name="title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Title" required />
          </div>

          <div>
            <label className="block font-medium">Meta Keywords <span className="text-xs text-gray-500">comma separated</span></label>
            <input name="keywords" value={form.keywords} onChange={handleChange} className="w-full p-2 border rounded" placeholder="keyword1, keyword2" />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">Meta Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" rows={4} placeholder="Meta description"></textarea>
          </div>

          <div className="md:col-span-2 flex gap-3">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? "Saving..." : (meta ? "Update" : "Create")}</button>
            {meta && <button type="button" onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>}
            <button type="button" onClick={() => { setRoute(appRoutes[0]); setMeta(null); setForm({ title: "", description: "", keywords: "" }); setMsg(""); }} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          </div>

          <div className="md:col-span-2 text-sm text-green-700">{msg}</div>
        </form>
      </div>
    </AdminLayout>
  );
}
