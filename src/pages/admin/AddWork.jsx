import React, { useState, useEffect } from "react";
import { authFetch } from "../../utils/auth";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/Adminlayout";
import BlogSeoSection from "../../components/admin/BlogSEOSection";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AddWork() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  // BASIC WORK FIELDS
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Technology");
  const [client, setClient] = useState("");
  const [year, setYear] = useState("");
  const [role, setRole] = useState("");
  const [techStack, setTechStack] = useState(""); 

  // CASE STUDY SPECIFIC FIELDS
  const [challengeText, setChallengeText] = useState("");
  const [solutionText, setSolutionText] = useState("");
  const [solutionQuote, setSolutionQuote] = useState("");
  
  // 3 CARDS
  const [cards, setCards] = useState([
    { title: "Energy Efficient", description: "" },
    { title: "40% Faster", description: "" },
    { title: "3nm Process", description: "" }
  ]);

  // IMAGE
  const [mainImageFile, setMainImageFile] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  
  const [galleryFiles, setGalleryFiles] = useState([]);

  // SEO
  const [metaTitle, setMetaTitle] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isEditMode) return;

    fetch(`${API}/api/works/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title || "");
        setSubtitle(data.subtitle || "");
        setCategory(data.category || "");
        setClient(data.client || "");
        setYear(data.year || "");
        setRole(data.role || "");
        setTechStack(Array.isArray(data.techStack) ? data.techStack.join(", ") : (data.techStack || ""));
        
        setChallengeText(data.challengeText || "");
        setSolutionText(data.solutionText || "");
        setSolutionQuote(data.solutionQuote || "");
        
        if (data.cards && data.cards.length > 0) {
          // merge up to 3
          const newCards = [...cards];
          for(let i=0; i<3; i++) {
            if(data.cards[i]) newCards[i] = { title: data.cards[i].title, description: data.cards[i].description };
          }
          setCards(newCards);
        }
        
        setMetaTitle(data.seo?.metaTitle || "");
        setMetaKeywords(data.seo?.metaKeywords || "");
        setMetaDescription(data.seo?.metaDescription || "");

        if (data.mainImage?.url) {
          setMainImagePreview(data.mainImage.url);
        }
      });
  }, [id]);

  const handleMainImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMainImageFile(file);
    setMainImagePreview(URL.createObjectURL(file));
  };
  
  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setGalleryFiles(files);
  };

  const handleCardChange = (index, field, value) => {
    const updated = [...cards];
    updated[index][field] = value;
    setCards(updated);
  };

  // SUBMIT
  const handleSubmit = async () => {
    if (!title.trim()) return alert("Title required");

    const form = new FormData();
    form.append("title", title);
    form.append("subtitle", subtitle);
    form.append("category", category);
    form.append("client", client);
    form.append("year", year);
    form.append("role", role);
    form.append("techStack", techStack);
    
    // CASE STUDY
    form.append("challengeText", challengeText);
    form.append("solutionText", solutionText);
    form.append("solutionQuote", solutionQuote);
    form.append("cards", JSON.stringify(cards));
    
    // SEO
    form.append("metaTitle", metaTitle);
    form.append("metaKeywords", metaKeywords);
    form.append("metaDescription", metaDescription);

    if (mainImageFile) form.append("mainImage", mainImageFile);
    
    if (galleryFiles.length > 0) {
      galleryFiles.forEach(file => {
        form.append("gallery", file);
      });
    }

    const endpoint = isEditMode
      ? `${API}/api/works/${id}`
      : `${API}/api/works`;

    const method = isEditMode ? "PUT" : "POST";

    setLoading(true);
    const res = await authFetch(endpoint, { method, body: form });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) return alert(data.msg || "Error");

    alert(isEditMode ? "Work Updated" : "Work Created");
    navigate("/admin/dashboard/works/read");
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto p-8 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-6">
          {isEditMode ? "Edit Work/Project" : "Add Work/Project"}
        </h1>

        {/* BASIC DETAILS SECTION */}
        <div className="mb-8 p-6 border rounded bg-gray-50">
           <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Basic Details & Images</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" className="w-full p-2 border rounded" value={title} onChange={e => setTitle(e.target.value)} />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input type="text" className="w-full p-2 border rounded" value={category} onChange={e => setCategory(e.target.value)} />
             </div>
             <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                <input type="text" className="w-full p-2 border rounded" value={subtitle} onChange={e => setSubtitle(e.target.value)} />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                <input type="text" className="w-full p-2 border rounded" value={client} onChange={e => setClient(e.target.value)} />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <input type="text" className="w-full p-2 border rounded" value={year} onChange={e => setYear(e.target.value)} />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <input type="text" className="w-full p-2 border rounded" value={role} onChange={e => setRole(e.target.value)} />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack (comma separated)</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="React, Node.js, TensorFlow" value={techStack} onChange={e => setTechStack(e.target.value)} />
             </div>
           </div>

           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Main Cover Image</label>
                {mainImagePreview && (
                  <img src={mainImagePreview} alt="Preview" className="h-32 object-cover mb-2 border rounded" />
                )}
                <input type="file" accept="image/*" onChange={handleMainImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images (Multiple Files)</label>
                <p className="text-xs text-gray-500 mb-2">Note: Overwrites existing gallery on new upload</p>
                <input type="file" accept="image/*" multiple onChange={handleGalleryChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                {galleryFiles.length > 0 && <p className="text-xs text-green-600 mt-2">{galleryFiles.length} files selected.</p>}
             </div>
           </div>
        </div>
        
        {/* CASE STUDY SECTION */}
        <div className="mb-8 p-6 border rounded bg-white">
           <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Case Study Layout Blocks</h2>
           
           <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">"The Challenge" Paragraph</label>
              <textarea rows="4" className="w-full p-3 border rounded focus:ring-blue-500" placeholder="Describe the client's bottleneck..." value={challengeText} onChange={e => setChallengeText(e.target.value)}></textarea>
           </div>
           
           <div className="mb-6 border p-4 bg-gray-50 rounded">
              <label className="block text-sm font-semibold text-gray-800 mb-3">3 Highlight Cards</label>
              {cards.map((card, idx) => (
                <div key={idx} className="flex gap-4 mb-3">
                  <input type="text" className="w-1/3 p-2 border rounded" placeholder="Card Title" value={card.title} onChange={e => handleCardChange(idx, 'title', e.target.value)} />
                  <input type="text" className="w-2/3 p-2 border rounded" placeholder="Card Description" value={card.description} onChange={e => handleCardChange(idx, 'description', e.target.value)} />
                </div>
              ))}
           </div>
           
           <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">"Our Solution" Paragraph</label>
              <textarea rows="4" className="w-full p-3 border rounded focus:ring-blue-500" placeholder="We developed..." value={solutionText} onChange={e => setSolutionText(e.target.value)}></textarea>
           </div>
           
           <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Solution Blockquote</label>
              <textarea rows="2" className="w-full p-3 border rounded border-l-4 border-l-orange-500 italic" placeholder='"The Divine Bite chip is a paradigm shift..."' value={solutionQuote} onChange={e => setSolutionQuote(e.target.value)}></textarea>
           </div>
        </div>

        <BlogSeoSection
          metaTitle={metaTitle} setMetaTitle={setMetaTitle}
          metaKeywords={metaKeywords} setMetaKeywords={setMetaKeywords}
          metaDescription={metaDescription} setMetaDescription={setMetaDescription}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 px-8 py-3 bg-[#5b3fd0] text-white rounded font-medium hover:bg-[#4d35b0]"
        >
          {loading ? "Saving..." : isEditMode ? "Update Work" : "Publish Work"}
        </button>
      </div>
    </AdminLayout>
  );
}
