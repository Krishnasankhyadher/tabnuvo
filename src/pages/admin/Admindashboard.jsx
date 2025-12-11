import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/Adminlayout";
const API_BASE = import.meta.env.VITE_API_URL;


const AdminDashboard = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [enquiryCount, setEnquiryCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

 async function fetchCounts() {
  try {
    setLoading(true);

    // 1) Enquiries
    try {
      const resE = await fetch(`${API_BASE}/api/enquiry`);
      console.log("ENQUIRY status", resE.status);
      const bodyE = await resE.text();
      try { console.log("ENQUIRY body", JSON.parse(bodyE)); } catch { console.log("ENQUIRY raw", bodyE); }
      const dataE = resE.ok ? JSON.parse(bodyE) : [];
      setEnquiryCount(Array.isArray(dataE) ? dataE.length : 0);
    } catch (err) {
      console.warn("Enquiry fetch failed:", err);
      setEnquiryCount(0);
    }

    // 2) Newsletter
    try {
      const resN = await fetch(`${API_BASE}/api/enquiries`);
      console.log("NEWSLETTER status", resN.status);
      const bodyN = await resN.text();
      try { console.log("NEWSLETTER body", JSON.parse(bodyN)); } catch { console.log("NEWSLETTER raw", bodyN); }
      const dataN = resN.ok ? JSON.parse(bodyN) : [];
      setNewsletterCount(Array.isArray(dataN) ? dataN.length : 0);
    } catch (err) {
      console.warn("Newsletter fetch failed:", err);
      setNewsletterCount(0);
    }

  } catch (err) {
    console.error("fetchCounts top-level error", err);
    setEnquiryCount(0);
    setNewsletterCount(0);
  } finally {
    setLoading(false);
  }
}

  const stats = [
    { label: "Total Blogs", value: 3, route: "/admin/dashboard/blogs" },
    { label: "Total Static Pages", value: 13, route: "/admin/dashboard/static-seo" },

    // 🔥 Connected to backend
    { label: "Total Newsletter", value: loading ? "…" : newsletterCount, route: "/admin/dashboard/newsletter" },

    // 🔥 Connected to backend
    { label: "Contact Inquire", value: loading ? "…" : enquiryCount, route: "/admin/dashboard/enquiries" },
  ];

  return (
    <AdminLayout>
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.label}
            onClick={() => navigate(item.route)}
            className="bg-white rounded-xl shadow-sm px-5 py-4 flex items-center gap-4 cursor-pointer hover:shadow-md hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="text-3xl text-pink-500">💎</div>
            <div>
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
