import React from 'react';
import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Link2, Image, Code, Quote, Undo, Redo } from 'lucide-react';

export default function BlogTextCanvas({
  editorRef,
  fileInputRef,
  activeFormats,
  executeCommand,
  insertLink,
  insertImageFromFile,
  insertBlockquote,
  insertCodeBlock,
  insertHeading,
  handleImageUpload,
  handleEditorClick,
  handleEditorKeyUp
}) {
  
  const buttonClass = (isActive) =>
    `p-2 rounded-md transition-colors ${
      isActive ? 'bg-blue-500 text-white hover:bg-blue-600' : 'hover:bg-gray-200 active:bg-gray-300'
    }`;

  return (
    <div>
      {/* Hidden input for editor image insert */}
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Details <span className="text-red-500">*</span></label>

      {/* Toolbar */}
      <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-3">
        <div className="flex flex-wrap gap-1 items-center">
          <div className="flex gap-1 items-center">
            <button onClick={() => executeCommand('bold')} className={buttonClass(activeFormats.bold)} title="Bold (Ctrl+B)"><Bold size={18} strokeWidth={2.5} /></button>
            <button onClick={() => executeCommand('italic')} className={buttonClass(activeFormats.italic)} title="Italic (Ctrl+I)"><Italic size={18} strokeWidth={2.5} /></button>
            <button onClick={() => executeCommand('underline')} className={buttonClass(activeFormats.underline)} title="Underline (Ctrl+U)"><Underline size={18} strokeWidth={2.5} /></button>
            <button onClick={() => executeCommand('strikeThrough')} className={buttonClass(activeFormats.strikeThrough)} title="Strikethrough" style={{ textDecoration: activeFormats.strikeThrough ? 'none' : 'line-through' }}><span className="text-lg font-bold">S</span></button>
          </div>

          <div className="w-px h-6 bg-gray-400 mx-1"></div>

          <div className="flex gap-2 items-center">
            <select onChange={(e) => executeCommand('fontSize', e.target.value)} className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-100 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="3">
              <option value="1">Very Small</option>
              <option value="2">Small</option>
              <option value="3">Normal</option>
              <option value="4">Medium</option>
              <option value="5">Large</option>
              <option value="6">Very Large</option>
              <option value="7">Huge</option>
            </select>

            <select onChange={(e) => { const value = e.target.value; if (value === 'p') executeCommand('formatBlock', '<p>'); else insertHeading(value); }} className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-100 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="p">
              <option value="p">Paragraph</option>
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="4">Heading 4</option>
              <option value="5">Heading 5</option>
              <option value="6">Heading 6</option>
            </select>
          </div>

          <div className="w-px h-6 bg-gray-400 mx-1"></div>

          <div className="flex gap-1 items-center">
            <button onClick={() => executeCommand('insertUnorderedList')} className={buttonClass(activeFormats.insertUnorderedList)} title="Bullet List"><List size={18} strokeWidth={2.5} /></button>
            <button onClick={() => executeCommand('insertOrderedList')} className={buttonClass(activeFormats.insertOrderedList)} title="Numbered List"><ListOrdered size={18} strokeWidth={2.5} /></button>
          </div>

          <div className="w-px h-6 bg-gray-400 mx-1"></div>

          <div className="flex gap-1 items-center">
            <button onClick={() => executeCommand('justifyLeft')} className={buttonClass(activeFormats.justifyLeft)} title="Align Left"><AlignLeft size={18} strokeWidth={2.5} /></button>
            <button onClick={() => executeCommand('justifyCenter')} className={buttonClass(activeFormats.justifyCenter)} title="Align Center"><AlignCenter size={18} strokeWidth={2.5} /></button>
            <button onClick={() => executeCommand('justifyRight')} className={buttonClass(activeFormats.justifyRight)} title="Align Right"><AlignRight size={18} strokeWidth={2.5} /></button>
          </div>

          <div className="w-px h-6 bg-gray-400 mx-1"></div>

          <div className="flex gap-1 items-center">
            <button onClick={insertLink} className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300" title="Insert Link (Select text first)"><Link2 size={18} strokeWidth={2.5} /></button>
            <button onClick={insertImageFromFile} className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300" title="Upload Image"><Image size={18} strokeWidth={2.5} /></button>
            <button onClick={insertBlockquote} className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300" title="Quote (Select text first)"><Quote size={18} strokeWidth={2.5} /></button>
            <button onClick={insertCodeBlock} className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300" title="Code Block (Select text first)"><Code size={18} strokeWidth={2.5} /></button>
          </div>

          <div className="w-px h-6 bg-gray-400 mx-1"></div>

          <div className="flex gap-1 items-center">
            <button onClick={() => executeCommand('undo')} className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300" title="Undo"><Undo size={18} strokeWidth={2.5} /></button>
            <button onClick={() => executeCommand('redo')} className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300" title="Redo"><Redo size={18} strokeWidth={2.5} /></button>
          </div>

          <div className="w-px h-6 bg-gray-400 mx-1"></div>

          <div className="flex gap-2 items-center">
            <div className="flex flex-col items-center">
              <label className="text-xs text-gray-600 mb-1">Text</label>
              <input type="color" onChange={(e) => executeCommand('foreColor', e.target.value)} className="w-8 h-8 border border-gray-300 rounded cursor-pointer" title="Text Color" />
            </div>
            <div className="flex flex-col items-center">
              <label className="text-xs text-gray-600 mb-1">BG</label>
              <input type="color" onChange={(e) => executeCommand('hiliteColor', e.target.value)} className="w-8 h-8 border border-gray-300 rounded cursor-pointer" title="Background Color" />
            </div>
          </div>
        </div>
      </div>

      {/* Editor Canvas */}
      <div ref={editorRef} contentEditable suppressContentEditableWarning onClick={handleEditorClick} onKeyUp={handleEditorKeyUp} className="min-h-96 p-6 border border-t-0 border-gray-300 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white overflow-y-auto" style={{ minHeight: '450px', maxHeight: '650px', lineHeight: '1.6' }} />
    </div>
  );
}