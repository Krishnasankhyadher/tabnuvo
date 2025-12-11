import React, { useState, useRef, useEffect } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Link2, Image, Code, Quote, Undo, Redo } from 'lucide-react';
import AdminLayout from '../../components/admin/Adminlayout';

export default function BlogEditor() {
  const [category, setCategory] = useState('uncategorized');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [postedDate, setPostedDate] = useState('');
  const [activeFormats, setActiveFormats] = useState({});
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML === '') {
      editorRef.current.innerHTML = '<p><br></p>';
    }
  }, []);

  const updateActiveFormats = () => {
    if (!editorRef.current) return;

    const formats = {
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      strikeThrough: document.queryCommandState('strikeThrough'),
      insertUnorderedList: document.queryCommandState('insertUnorderedList'),
      insertOrderedList: document.queryCommandState('insertOrderedList'),
      justifyLeft: document.queryCommandState('justifyLeft'),
      justifyCenter: document.queryCommandState('justifyCenter'),
      justifyRight: document.queryCommandState('justifyRight'),
    };

    setActiveFormats(formats);
  };

  const handleEditorClick = () => {
    updateActiveFormats();
  };

  const handleEditorKeyUp = () => {
    updateActiveFormats();
  };

  const executeCommand = (command, value = null) => {
    try {
      document.execCommand(command, false, value);
      if (editorRef.current) {
        editorRef.current.focus();
      }
      updateActiveFormats();
    } catch (error) {
      console.error('Command execution error:', error);
    }
  };

  const insertImageFromFile = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          range.insertNode(img);
          range.collapse(false);
        }
        
        if (editorRef.current) {
          editorRef.current.focus();
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  const insertLink = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    
    if (!selectedText) {
      alert('Please select some text first to create a link');
      return;
    }
    
    const linkUrl = window.prompt('Enter URL:', 'https://');
    if (linkUrl) {
      executeCommand('createLink', linkUrl);
    }
  };

  const insertHeading = (level) => {
    const tag = `h${level}`;
    executeCommand('formatBlock', `<${tag}>`);
  };

  const insertBlockquote = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedContent = range.extractContents();
      
      const blockquote = document.createElement('blockquote');
      blockquote.style.borderLeft = '4px solid #ccc';
      blockquote.style.paddingLeft = '16px';
      blockquote.style.margin = '16px 0';
      blockquote.style.color = '#666';
      blockquote.style.fontStyle = 'italic';
      blockquote.appendChild(selectedContent);
      
      range.insertNode(blockquote);
      range.collapse(false);
    }
  };

  const insertCodeBlock = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedContent = range.extractContents();
      
      const pre = document.createElement('pre');
      pre.style.backgroundColor = '#f4f4f4';
      pre.style.padding = '12px';
      pre.style.borderRadius = '4px';
      pre.style.border = '1px solid #ddd';
      pre.style.overflow = 'auto';
      pre.style.fontFamily = 'monospace';
      
      const code = document.createElement('code');
      code.appendChild(selectedContent);
      pre.appendChild(code);
      
      range.insertNode(pre);
      range.collapse(false);
    }
  };

  const handlePublish = () => {
    if (!title.trim()) {
      alert('Please enter a title');
      return;
    }
    
    const blogData = {
      category,
      title,
      url,
      postedDate,
      content: editorRef.current?.innerHTML || ''
    };
    
    console.log('Blog Data:', blogData);
    alert('Blog published successfully! Check console for details.');
  };

  const handleClear = () => {
    setCategory('uncategorized');
    setTitle('');
    setUrl('');
    setPostedDate('');
    if (editorRef.current) {
      editorRef.current.innerHTML = '<p><br></p>';
    }
  };

  const buttonClass = (isActive) => 
    `p-2 rounded-md transition-colors ${
      isActive 
        ? 'bg-blue-500 text-white hover:bg-blue-600' 
        : 'hover:bg-gray-200 active:bg-gray-300'
    }`;

  return (
    <AdminLayout>

    <div className="min-h-screen bg-gray-50">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">New Blog Details</h1>
            <div className="text-sm text-gray-500">
              <span className="hover:text-gray-700 cursor-pointer">Blog</span>
              <span className="mx-2">/</span>
              <span className="font-medium text-gray-700">New Blog</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8 space-y-6">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blog Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Blog Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title .."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Url <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Url .."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Posted Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Posted Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={postedDate}
                  onChange={(e) => setPostedDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Editor Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Details <span className="text-red-500">*</span>
              </label>

              {/* Toolbar */}
              <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-3">
                <div className="flex flex-wrap gap-1 items-center">
                  {/* Text Formatting */}
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => executeCommand('bold')}
                      className={buttonClass(activeFormats.bold)}
                      title="Bold (Ctrl+B)"
                    >
                      <Bold size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => executeCommand('italic')}
                      className={buttonClass(activeFormats.italic)}
                      title="Italic (Ctrl+I)"
                    >
                      <Italic size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => executeCommand('underline')}
                      className={buttonClass(activeFormats.underline)}
                      title="Underline (Ctrl+U)"
                    >
                      <Underline size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => executeCommand('strikeThrough')}
                      className={buttonClass(activeFormats.strikeThrough)}
                      title="Strikethrough"
                      style={{ textDecoration: activeFormats.strikeThrough ? 'none' : 'line-through' }}
                    >
                      <span className="text-lg font-bold">S</span>
                    </button>
                  </div>

                  <div className="w-px h-6 bg-gray-400 mx-1"></div>

                  {/* Font Size & Headings */}
                  <div className="flex gap-2 items-center">
                    <select
                      onChange={(e) => executeCommand('fontSize', e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-100 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="3"
                    >
                      <option value="1">Very Small</option>
                      <option value="2">Small</option>
                      <option value="3">Normal</option>
                      <option value="4">Medium</option>
                      <option value="5">Large</option>
                      <option value="6">Very Large</option>
                      <option value="7">Huge</option>
                    </select>

                    <select
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === 'p') {
                          executeCommand('formatBlock', '<p>');
                        } else {
                          insertHeading(value);
                        }
                      }}
                      className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-100 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="p"
                    >
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

                  {/* Lists */}
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => executeCommand('insertUnorderedList')}
                      className={buttonClass(activeFormats.insertUnorderedList)}
                      title="Bullet List"
                    >
                      <List size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => executeCommand('insertOrderedList')}
                      className={buttonClass(activeFormats.insertOrderedList)}
                      title="Numbered List"
                    >
                      <ListOrdered size={18} strokeWidth={2.5} />
                    </button>
                  </div>

                  <div className="w-px h-6 bg-gray-400 mx-1"></div>

                  {/* Alignment */}
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => executeCommand('justifyLeft')}
                      className={buttonClass(activeFormats.justifyLeft)}
                      title="Align Left"
                    >
                      <AlignLeft size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => executeCommand('justifyCenter')}
                      className={buttonClass(activeFormats.justifyCenter)}
                      title="Align Center"
                    >
                      <AlignCenter size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => executeCommand('justifyRight')}
                      className={buttonClass(activeFormats.justifyRight)}
                      title="Align Right"
                    >
                      <AlignRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>

                  <div className="w-px h-6 bg-gray-400 mx-1"></div>

                  {/* Insert Options */}
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={insertLink}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300"
                      title="Insert Link (Select text first)"
                      >
                      <Link2 size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={insertImageFromFile}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300"
                      title="Upload Image"
                    >
                      <Image size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={insertBlockquote}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300"
                      title="Quote (Select text first)"
                    >
                      <Quote size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={insertCodeBlock}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300"
                      title="Code Block (Select text first)"
                    >
                      <Code size={18} strokeWidth={2.5} />
                    </button>
                  </div>

                  <div className="w-px h-6 bg-gray-400 mx-1"></div>

                  {/* Undo/Redo */}
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => executeCommand('undo')}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300"
                      title="Undo"
                    >
                      <Undo size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => executeCommand('redo')}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors active:bg-gray-300"
                      title="Redo"
                    >
                      <Redo size={18} strokeWidth={2.5} />
                    </button>
                  </div>

                  <div className="w-px h-6 bg-gray-400 mx-1"></div>

                  {/* Colors */}
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col items-center">
                      <label className="text-xs text-gray-600 mb-1">Text</label>
                      <input
                        type="color"
                        onChange={(e) => executeCommand('foreColor', e.target.value)}
                        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                        title="Text Color"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <label className="text-xs text-gray-600 mb-1">BG</label>
                      <input
                        type="color"
                        onChange={(e) => executeCommand('hiliteColor', e.target.value)}
                        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                        title="Background Color"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Editor Canvas */}
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onClick={handleEditorClick}
                onKeyUp={handleEditorKeyUp}
                className="min-h-96 p-6 border border-t-0 border-gray-300 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white overflow-y-auto"
                style={{
                  minHeight: '450px',
                  maxHeight: '650px',
                  lineHeight: '1.6'
                }}
              ></div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-5 border-t border-gray-200 rounded-b-lg flex justify-end gap-3">
            <button
              onClick={handleClear}
              className="px-8 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 hover:border-gray-400 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handlePublish}
              className="px-8 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
            >
              Publish Blog
            </button>
          </div>
        </div>
      </div>
    </div>
              </AdminLayout>
  );
}