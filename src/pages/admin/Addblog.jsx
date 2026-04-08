import React, { useState, useRef, useEffect } from "react";
import { authFetch } from "../../utils/auth";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/Adminlayout";
import BlogSeoSection from "../../components/admin/BlogSEOSection";
import BlogTextCanvas from "../../components/admin/BlogTextCanvas";
import BlogBasicDetails from "../../components/admin/BlogBasicDetails";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  // BASIC
  const [category, setCategory] = useState("uncategorized");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [postedDate, setPostedDate] = useState("");

  // IMAGE
  const [mainImageFile, setMainImageFile] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [mainImageTitle, setMainImageTitle] = useState("");

  // SEO
  const [metaTitle, setMetaTitle] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  // EDITOR
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({});
  const [loading, setLoading] = useState(false);

  // 🟢 LOAD BLOG DATA (EDIT MODE)
  useEffect(() => {
    if (!isEditMode) return;

    fetch(`${API}/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setCategory(data.category || "");
        setTitle(data.title || "");
        setUrl(data.url || "");
        setPostedDate(data.postedDate?.slice(0, 10) || "");
        setMetaTitle(data.seo?.metaTitle || "");
        setMetaKeywords(data.seo?.metaKeywords || "");
        setMetaDescription(data.seo?.metaDescription || "");

        setMainImageTitle(data.mainImageTitle || "");

        if (editorRef.current) {
          editorRef.current.innerHTML = data.content || "<p><br></p>";
        }

        if (data.mainImage?.url) {
          setMainImagePreview(data.mainImage.url);
        }
      });
  }, [id]);

  // 🟢 FORMAT HANDLERS
  const updateActiveFormats = () => {
    if (!editorRef.current) return;
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
    });
  };

  const executeCommand = (cmd, value = null) => {
    document.execCommand(cmd, false, value);
    editorRef.current?.focus();
    updateActiveFormats();
  };

  const insertImageFromFile = () => fileInputRef.current?.click();

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ev => {
      const img = document.createElement("img");
      img.src = ev.target.result;
      img.style.maxWidth = "100%";
      editorRef.current.appendChild(img);
    };
    reader.readAsDataURL(file);
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMainImageFile(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // 🚀 CREATE / UPDATE
  const handleSubmit = async () => {
    if (!title.trim()) return alert("Title required");

    const form = new FormData();
    form.append("category", category);
    form.append("title", title);
    form.append("url", url);
    form.append("postedDate", postedDate);
    form.append("content", editorRef.current.innerHTML);
    form.append("metaTitle", metaTitle);
    form.append("metaKeywords", metaKeywords);
    form.append("metaDescription", metaDescription);
    form.append("mainImageTitle", mainImageTitle);

    if (mainImageFile) form.append("mainImage", mainImageFile);

    const endpoint = isEditMode
      ? `${API}/api/blogs/${id}`
      : `${API}/api/blogs`;

    const method = isEditMode ? "PUT" : "POST";

    setLoading(true);
    const res = await authFetch(endpoint, { method, body: form });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) return alert(data.msg || "Error");

    alert(isEditMode ? "Blog Updated" : "Blog Created");
    navigate("/admin/dashboard/blogs/read");
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto p-8 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-6">
          {isEditMode ? "Edit Blog" : "Create Blog"}
        </h1>

        <BlogBasicDetails
          category={category} setCategory={setCategory}
          title={title} setTitle={setTitle}
          url={url} setUrl={setUrl}
          postedDate={postedDate} setPostedDate={setPostedDate}
          mainImageTitle={mainImageTitle} setMainImageTitle={setMainImageTitle}
          mainImagePreview={mainImagePreview}
          handleMainImageChange={handleMainImageChange}
        />

        <BlogSeoSection
          metaTitle={metaTitle} setMetaTitle={setMetaTitle}
          metaKeywords={metaKeywords} setMetaKeywords={setMetaKeywords}
          metaDescription={metaDescription} setMetaDescription={setMetaDescription}
        />

        <BlogTextCanvas
          editorRef={editorRef}
          fileInputRef={fileInputRef}
          activeFormats={activeFormats}
          executeCommand={executeCommand}
          insertImageFromFile={insertImageFromFile}
          handleImageUpload={handleImageUpload}
          handleEditorClick={updateActiveFormats}
          handleEditorKeyUp={updateActiveFormats}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded"
        >
          {loading ? "Saving..." : isEditMode ? "Update Blog" : "Publish Blog"}
        </button>
      </div>
    </AdminLayout>
  );
}
