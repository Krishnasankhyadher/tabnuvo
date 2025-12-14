import React from 'react';

export default function BlogSeoSection({
  metaTitle, setMetaTitle,
  metaKeywords, setMetaKeywords,
  metaDescription, setMetaDescription
}) {
  return (
    <div className="border border-gray-200 rounded p-4 bg-gray-50">
      <div className="text-sm font-semibold text-gray-700 mb-3 text-center rounded">SEO SECTION START</div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Title</label>
          <input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Meta Title .." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <div className="text-xs text-gray-500 mt-1">{metaTitle.length} / 60 (recommended ≤ 60)</div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Keywords <span className="text-red-500">Enter Separated by , (commas)</span></label>
          <textarea value={metaKeywords} onChange={(e) => setMetaKeywords(e.target.value)} placeholder="Meta Keywords.." rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <div className="text-xs text-gray-500 mt-1">Example: keyword1, keyword2, keyword3</div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
          <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Meta Description .." rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <div className="text-xs text-gray-500 mt-1">{metaDescription.length} / 160 (recommended ≤ 160)</div>
        </div>
      </div>
    </div>
  );
}