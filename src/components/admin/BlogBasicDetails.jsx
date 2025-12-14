import React from 'react';

export default function BlogBasicDetails({
  category, setCategory,
  title, setTitle,
  url, setUrl,
  postedDate, setPostedDate,
  mainImageTitle, setMainImageTitle,
  mainImagePreview,
  handleMainImageChange,
  removeMainImage
}) {
  return (
    <div className="space-y-6">
      {/* Top form rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Blog Category <span className="text-red-500">*</span></label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Title <span className="text-red-500">*</span></label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title .." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Url <span className="text-red-500">*</span></label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Url .." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Posted Date <span className="text-red-500">*</span></label>
          <input type="date" value={postedDate} onChange={(e) => setPostedDate(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
      </div>

      {/* MAIN IMAGE row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Main Image <span className="text-red-500">*</span></label>
          <input type="file" accept="image/*" onChange={handleMainImageChange} className="w-full" />
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Image Title (ALT)</label>
          <input type="text" value={mainImageTitle} onChange={(e) => setMainImageTitle(e.target.value)} placeholder="Image Title .." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>

        <div className="md:col-span-1 flex items-center gap-3">
          {mainImagePreview ? (
            <div className="flex items-center gap-3">
              <img src={mainImagePreview} alt={mainImageTitle || 'Main preview'} style={{ width: 140, height: 'auto', objectFit: 'cover', borderRadius: 6, border: '1px solid #e5e7eb' }} />
              <div>
                <button onClick={removeMainImage} className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">Remove</button>
              </div>
            </div>
          ) : (
            <div className="text-sm text-gray-500">Recommended size: 700×480</div>
          )}
        </div>
      </div>
    </div>
  );
}