import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { authFetch } from "../../utils/auth";

const API = import.meta.env.VITE_API_URL;

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/blogs/${id}`)
      .then((r) => r.json())
      .then(setBlog);
  }, [id]);

  const updateBlog = async () => {
    const form = new FormData();
    Object.entries(blog).forEach(([k, v]) => form.append(k, v));

    await authFetch(`${API}/api/blogs/${id}`, {
      method: "PUT",
      body: form,
    });

    alert("Updated");
    navigate("/admin/dashboard/blogs/read");
  };

  if (!blog) return null;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Blog</h1>

      <input
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={updateBlog}
        className="bg-blue-600 text-white px-6 py-2"
      >
        Save Changes
      </button>
    </div>
  );
}
