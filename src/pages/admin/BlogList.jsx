import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/Adminlayout";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Calendar, 
  Tag, 
  Image as ImageIcon,
  Loader2,
  ExternalLink
} from "lucide-react";

const API = import.meta.env.VITE_API_URL;

export default function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/blogs`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to load blogs", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog? This action cannot be undone.")) return;
    try {
      await fetch(`${API}/api/blogs/${id}`, { method: "DELETE" });
      // Optimistic update: remove from UI immediately
      setBlogs(prev => prev.filter(b => b._id !== id));
    } catch (error) {
      alert("Failed to delete blog");
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // Client-side search filtering
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50/50 pb-20">
        
        {/* --- HEADER SECTION --- */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
           <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Title & Stats */}
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">All Blogs</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage your posts, track views, and update content.
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                        {blogs.length} Total
                    </span>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                   <Link
                    to="/admin/dashboard/blogs/create"
                    className="flex items-center gap-2 bg-[#5b3fd0] hover:bg-[#4d35b0] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md"
                  >
                    <Plus size={18} />
                    Create New Blog
                  </Link>
                </div>
              </div>

              {/* Search Bar (Optional sub-header) */}
              <div className="mt-6">
                <div className="relative max-w-md">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                   <input 
                      type="text" 
                      placeholder="Search blogs by title or category..." 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fd0]/20 focus:border-[#5b3fd0] transition-all text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                   />
                </div>
              </div>
           </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Loading State */}
          {loading && (
             <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Loader2 size={40} className="animate-spin mb-4 text-[#5b3fd0]" />
                <p>Loading your awesome content...</p>
             </div>
          )}

          {/* Empty State */}
          {!loading && filteredBlogs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
               <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon size={30} className="text-gray-400" />
               </div>
               <h3 className="text-lg font-medium text-gray-900">No blogs found</h3>
               <p className="text-gray-500 mt-1 mb-6">
                 {searchTerm ? "Try adjusting your search terms." : "Get started by creating your first blog post."}
               </p>
               {!searchTerm && (
                 <Link to="/admin/dashboard/blogs/create" className="text-[#5b3fd0] font-medium hover:underline">
                    Create your first blog &rarr;
                 </Link>
               )}
            </div>
          )}

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!loading && filteredBlogs.map((blog) => {
              // Handle relative image paths from backend
              // ✅ NEW ROBUST CODE
let imageUrl = null;

if (blog.mainImage) {
  // Case 1: It's an object (like { url: "..." }) - based on your old code
  if (typeof blog.mainImage === 'object' && blog.mainImage.url) {
    imageUrl = blog.mainImage.url;
  } 
  // Case 2: It's a simple string path (like "uploads/image.jpg")
  else if (typeof blog.mainImage === 'string') {
     // If it's already a full URL (http...), use it. Otherwise, prepend API URL.
     imageUrl = blog.mainImage.startsWith('http') 
        ? blog.mainImage 
        : `${API}/${blog.mainImage}`;
  }
}
              return (
                <div 
                  key={blog._id} 
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Area */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                         <ImageIcon size={40} className="opacity-20" />
                         <span className="text-xs mt-2 opacity-50">No Cover Image</span>
                      </div>
                    )}
                    {/* Category Badge Overlay */}
                    <div className="absolute top-3 left-3">
                       <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-[#5b3fd0] rounded-full shadow-sm uppercase tracking-wide">
                          {blog.category || "General"}
                       </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="text-lg font-bold text-gray-800 leading-snug mb-2 line-clamp-2 group-hover:text-[#5b3fd0] transition-colors">
                      {blog.title}
                    </h2>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 mt-auto pt-4 border-t border-gray-50">
                        <div className="flex items-center gap-1.5">
                           <Calendar size={14} />
                           {new Date(blog.createdAt).toLocaleDateString(undefined, {
                              year: 'numeric', month: 'short', day: 'numeric'
                           })}
                        </div>
                        {blog.metaKeywords && (
                          <div className="flex items-center gap-1.5">
                             <Tag size={14} />
                             <span>SEO Optimized</span>
                          </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <Link 
                         to={`/admin/dashboard/blogs/edit/${blog._id}`} 
                         className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium text-sm hover:bg-[#5b3fd0] hover:text-white transition-colors"
                      >
                         <Edit3 size={16} />
                         Edit
                      </Link>
                      
                      {/* Optional View Button */}
                      {/* <a href={`/blog/${blog.url}`} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="View Live">
                         <ExternalLink size={18} />
                      </a> */}

                      <button 
                         onClick={() => deleteBlog(blog._id)}
                         className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                         title="Delete Blog"
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