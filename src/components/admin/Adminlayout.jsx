// src/components/AdminLayout.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: "💻" },
    { label: "Static Page SEO", path: "/admin/dashboard/static-seo", icon: "💎" },
    { label: "Blogs", path: "/admin/dashboard/blogs", icon: "💎" },
    { label: "News Letter", path: "/admin/dashboard/newsletter", icon: "💎" },
    { label: "Enquiries", path: "/admin/dashboard/enquiries", icon: "💎" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex bg-[#f4f5f7]">
      {/* Sidebar (mobile: slide in/out) */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white border-r shadow-sm
          transform transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0
        `}
      >
        {/* Logo area */}
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Replace src with your logo */}
            <img
              src="/assets/main.png"
              alt="TabNuvo"
              className="h-8 w-8 rounded-md object-cover"
            />
            <div>
              <p className="font-semibold text-sm">TabNuvo Admin</p>
              <p className="text-[11px] text-green-600 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                online
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="px-3 py-4 text-sm overflow-y-auto h-[calc(100vh-120px)]">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false); // close on mobile
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition
                ${
                  isActive(item.path)
                    ? "bg-[#e6ddff] text-[#5b3fd0] font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="truncate font-bold text-lg">{item.label}</span>
              {item.label === "Dashboard" && (
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#5b3fd0] text-white">
                  Admin
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="px-4 py-3 text-[11px] text-gray-500 border-t">
          © {new Date().getFullYear()} TabNuvo. All Rights Reserved
        </div>
      </aside>

      {/* Right side */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top black navbar */}
        <header className="h-14 bg-black text-white flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-xl"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              ☰
            </button>
            <div>
              <h1 className="text-sm font-semibold">
                {location.pathname.includes("/admin/dashboard")
                  ? "Dashboard"
                  : "Admin"}
              </h1>
              <p className="text-[11px] text-gray-300 hidden sm:block">
                TabNuvo / {location.pathname.replace("/admin/", "")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
              A
            </div>
            <button
              onClick={handleLogout}
              className="text-xs border border-white/40 px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
