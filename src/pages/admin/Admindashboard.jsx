import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/Adminlayout";
import {
  FileText,
  Layout,
  Mail,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Calendar,
  PenTool,
  Sparkles
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // State
  const [blogCount, setBlogCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [enquiryCount, setEnquiryCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  // ✅ Helper
  async function safeFetchCount(url, setter) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (Array.isArray(data)) {
        setter(data.length);
      } else if (typeof data?.count === "number") {
        setter(data.count);
      } else {
        setter(0);
      }
    } catch (err) {
      console.warn(`Fetch failed for ${url}`, err);
      setter(0);
    }
  }

  // ✅ Main Fetch
  async function fetchCounts() {
    try {
      setLoading(true);
      await Promise.all([
        safeFetchCount(`${API_BASE}/api/blogs`, setBlogCount),
        safeFetchCount(`${API_BASE}/api/pagemeta/count`, setPageCount),
        safeFetchCount(`${API_BASE}/api/newsletter`, setNewsletterCount),
        safeFetchCount(`${API_BASE}/api/enquiry`, setEnquiryCount),
      ]);
    } finally {
      setLoading(false);
    }
  }

  // Configuration for cards
  const stats = [
    {
      label: "Total Blogs",
      value: blogCount,
      route: "/admin/dashboard/blogs/read",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "hover:border-blue-300/50",
    },
    {
      label: "Static Pages",
      value: pageCount,
      route: "/admin/dashboard/static-seo",
      icon: Layout,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "hover:border-indigo-300/50",
    },
    {
      label: "Newsletter",
      value: newsletterCount,
      route: "/admin/dashboard/newsletter",
      icon: Mail,
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "hover:border-violet-300/50",
    },
    {
      label: "Enquiries",
      value: enquiryCount,
      route: "/admin/dashboard/enquiries",
      icon: MessageSquare,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "hover:border-emerald-300/50",
    },
  ];

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50/50 p-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* === WELCOME HEADER === */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Dashboard Overview
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Welcome back! Here's your website at a glance.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
              <Calendar size={16} className="text-gray-400" />
              <span className="font-medium">
                {new Date().toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </header>

          {/* === STATS GRID === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(item.route)}
                className={`
                  group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm 
                  cursor-pointer transition-all duration-300 ease-out
                  hover:shadow-md hover:-translate-y-1 ${item.border}
                `}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${item.bg} ${item.color} transition-colors`}
                  >
                    <item.icon size={24} strokeWidth={2} />
                  </div>
                  <div className="p-2 rounded-full bg-gray-50 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-2">
                    <ArrowRight size={16} />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    {item.label}
                  </p>
                  {loading ? (
                    <div className="h-8 w-16 bg-gray-100 rounded animate-pulse" />
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl font-bold text-gray-900 leading-none">
                        {item.value}
                      </h3>
                      {/* Decorative "live" indicator */}
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-100 px-1.5 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider">
                        <TrendingUp size={10} /> Live
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* === QUICK ACTION BANNER === */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5b3fd0] to-[#462ba8] shadow-lg p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white/5">
              <Sparkles size={150} strokeWidth={1} />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                   <Sparkles size={20} className="text-yellow-300" fill="currentColor" />
                 </div>
                 <h3 className="text-xl font-bold">Boost Your SEO</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Publishing fresh content is the best way to improve your search rankings. 
                It looks like a great day to write something new!
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <button
                onClick={() => navigate("/admin/dashboard/blogs/create")}
                className="flex items-center gap-2 bg-white text-[#5b3fd0] text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md active:scale-95 duration-200"
              >
                <PenTool size={18} />
                Write New Post
              </button>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}