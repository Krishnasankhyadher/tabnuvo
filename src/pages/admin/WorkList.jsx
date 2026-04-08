import { useEffect, useState } from "react";
import { authFetch } from "../../utils/auth";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/Adminlayout";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  Calendar,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function WorkList() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const loadWorks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/works`);
      const data = await res.json();
      setWorks(data);
    } catch (error) {
      console.error("Failed to load works", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteWork = async (id) => {
    if (!window.confirm("Are you sure you want to delete this work? This action cannot be undone.")) return;
    try {
      await authFetch(`${API}/api/works/${id}`, { method: "DELETE" });
      setWorks(prev => prev.filter(w => w._id !== id));
    } catch (error) {
      alert("Failed to delete work");
    }
  };

  useEffect(() => {
    loadWorks();
  }, []);

  const filteredWorks = works.filter(work =>
    (work.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (work.category || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50/50 pb-20">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">All Works</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Manage your portfolio works and projects.
                  <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                    {works.length} Total
                  </span>
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/admin/dashboard/works/create"
                  className="flex items-center gap-2 bg-[#5b3fd0] hover:bg-[#4d35b0] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md"
                >
                  <Plus size={18} />
                  Add New Work
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search works by title or category..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fd0]/20 focus:border-[#5b3fd0] transition-all text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <Loader2 size={40} className="animate-spin mb-4 text-[#5b3fd0]" />
              <p>Loading your portfolio...</p>
            </div>
          )}

          {!loading && filteredWorks.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon size={30} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No works found</h3>
              <p className="text-gray-500 mt-1 mb-6">
                {searchTerm ? "Try adjusting your search terms." : "Get started by adding your first project."}
              </p>
              {!searchTerm && (
                <Link to="/admin/dashboard/works/create" className="text-[#5b3fd0] font-medium hover:underline">
                  Add your first work &rarr;
                </Link>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!loading && filteredWorks.map((work) => {
              let imageUrl = null;
              if (work.mainImage) {
                if (typeof work.mainImage === 'object' && work.mainImage.url) {
                  imageUrl = work.mainImage.url;
                } else if (typeof work.mainImage === 'string') {
                  imageUrl = work.mainImage.startsWith('http')
                    ? work.mainImage
                    : `${API}/${work.mainImage}`;
                }
              }

              return (
                <div
                  key={work._id}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon size={40} className="opacity-20" />
                        <span className="text-xs mt-2 opacity-50">No Cover Image</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-[#5b3fd0] rounded-full shadow-sm uppercase tracking-wide">
                        {work.category || "General"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="text-lg font-bold text-gray-800 leading-snug mb-2 line-clamp-2 group-hover:text-[#5b3fd0] transition-colors">
                      {work.title}
                    </h2>
                    
                    <p className="text-xs text-gray-500 mb-4 line-clamp-1">{work.client} - {work.year}</p>

                    <div className="flex items-center gap-2 mt-auto border-t border-gray-50 pt-4">
                      <Link
                        to={`/admin/dashboard/works/edit/${work._id}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium text-sm hover:bg-[#5b3fd0] hover:text-white transition-colors"
                      >
                        <Edit3 size={16} />
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteWork(work._id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Work"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
