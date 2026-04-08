import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  FileText,
  Mail,
  MessageSquare,
  Menu,
  X,
  LogOut,
  Bell,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  Eye,
  Trash2
} from "lucide-react";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState("Blogs"); // Default open
  const navigate = useNavigate();
  const location = useLocation();

  // --- MENU CONFIGURATION ---
  const menuItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      label: "Static Page SEO",
      path: "/admin/dashboard/static-seo",
      icon: <Search size={20} />
    },
    {
      label: "Blogs",
      icon: <FileText size={20} />,
      // Submenu with separate Create, Read, Delete
      submenu: [
        {
          label: "Create Blog",
          path: "/admin/dashboard/blogs/create",
          icon: <PlusCircle size={16} />
        },
        {
          label: "Read / View All",
          path: "/admin/dashboard/blogs/read",
          icon: <Eye size={16} />
        },

      ]
    },
    {
      label: "Works",
      icon: <FileText size={20} />,
      submenu: [
        {
          label: "Create Work",
          path: "/admin/dashboard/works/create",
          icon: <PlusCircle size={16} />
        },
        {
          label: "Read / View All",
          path: "/admin/dashboard/works/read",
          icon: <Eye size={16} />
        },
      ]
    },
    {
      label: "News Letter",
      path: "/admin/dashboard/newsletter",
      icon: <Mail size={20} />
    },
    {
      label: "Enquiries",
      path: "/admin/dashboard/enquiries",
      icon: <MessageSquare size={20} />
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const isActive = (path) => location.pathname === path;

  const toggleSubmenu = (label) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <div className="min-h-screen flex bg-[#f8f9fa] font-sans text-gray-800">

      {/* MOBILE BACKDROP */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* --- SIDEBAR --- */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 shadow-xl md:shadow-none
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 flex flex-col
        `}
      >
        {/* Logo Area */}
        <div className="h-16 px-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#5b3fd0] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              T
            </div>
            <div>
              <h1 className="font-bold text-gray-900 leading-tight">TabNuvo</h1>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-medium text-gray-500">Admin Panel</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Main Menu</p>

          {menuItems.map((item) => {
            // --- CASE 1: SUBMENU ITEM ---
            if (item.submenu) {
              const isExpanded = expandedMenu === item.label;
              const isParentActive = item.submenu.some(sub => isActive(sub.path));

              return (
                <div key={item.label} className="mb-1">
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
                      ${isParentActive
                        ? "bg-gray-50 text-[#5b3fd0] font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isParentActive ? "text-[#5b3fd0]" : "text-gray-400 group-hover:text-gray-600"}>
                        {item.icon}
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </div>
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>

                  {/* Dropdown Animation Wrapper */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-56 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    {item.submenu.map((subItem) => {
                      const subActive = isActive(subItem.path);
                      return (
                        <button
                          key={subItem.path}
                          onClick={() => {
                            navigate(subItem.path);
                            setSidebarOpen(false);
                          }}
                          className={`
                            w-full flex items-center gap-3 pl-12 pr-4 py-2.5 rounded-lg text-sm transition-colors
                            ${subActive
                              ? "text-[#5b3fd0] font-medium bg-[#5b3fd0]/5"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            }
                          `}
                        >
                          <span className={subActive ? "text-[#5b3fd0]" : "text-gray-400"}>
                            {subItem.icon}
                          </span>
                          {subItem.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // --- CASE 2: STANDARD ITEM ---
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-1 group
                  ${active
                    ? "bg-[#5b3fd0]/10 text-[#5b3fd0] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <span className={`transition-colors ${active ? "text-[#5b3fd0]" : "text-gray-400 group-hover:text-gray-600"}`}>
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* --- RIGHT SIDE CONTENT --- */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 z-10 shadow-sm/50">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="hidden md:block">
              <h2 className="text-lg font-bold text-gray-800 capitalize">
                {location.pathname.split('/').pop().replace(/-/g, ' ') || 'Dashboard'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-700">Administrator</p>
                <p className="text-xs text-gray-400">admin@tabnuvo.com</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff" alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f8f9fa] p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;