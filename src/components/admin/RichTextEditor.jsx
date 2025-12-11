// src/components/admin/RichTextEditor.jsx
import React, { useRef, useEffect, useState } from "react";

const btn =
  "px-2 py-1 text-xs border border-gray-200 rounded bg-white hover:bg-gray-100";

const FONT_SIZES = [
  { label: "12", cmdValue: 2 }, // execCommand fontSize uses 1–7
  { label: "14", cmdValue: 3 },
  { label: "16", cmdValue: 4 },
  { label: "18", cmdValue: 5 },
  { label: "24", cmdValue: 6 },
  { label: "32", cmdValue: 7 },
];

const FONT_FAMILIES = [
  { label: "Default", value: "" },
  { label: "Inter / System", value: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
  { label: "Courier New", value: "'Courier New', Courier, monospace" },
];

const RichTextEditor = ({ initialValue = "", onChange, height = "350px" }) => {
  const editorRef = useRef(null);
  const [currentFontSize, setCurrentFontSize] = useState("16");
  const [currentFontFamily, setCurrentFontFamily] = useState("");

  // Set initial content once (or when initialValue changes externally)
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initialValue || "";
    }
  }, [initialValue]);

  const applyCommand = (cmd, arg = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, arg);
    handleInput();
  };

  const handleInput = () => {
    if (!editorRef.current || !onChange) return;
    const html = editorRef.current.innerHTML;
    onChange(html);
  };

  const handleFontSizeChange = (e) => {
    const label = e.target.value;
    setCurrentFontSize(label);
    const sizeObj = FONT_SIZES.find((s) => s.label === label);
    if (!sizeObj) return;
    applyCommand("fontSize", sizeObj.cmdValue);
  };

  const handleFontFamilyChange = (e) => {
    const value = e.target.value;
    setCurrentFontFamily(value);
    if (!value) return;
    applyCommand("fontName", value);
  };

  const insertLink = () => {
    const url = prompt("Enter URL");
    if (url) {
      applyCommand("createLink", url);
    }
  };

  const clearContent = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = "";
      handleInput();
    }
  };

  return (
    <div className="border rounded-md bg-white">
      {/* TOOLBAR */}
      <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50 text-gray-700 text-xs items-center">
        {/* font family */}
        <select
          value={currentFontFamily}
          onChange={handleFontFamilyChange}
          className="text-xs border border-gray-200 rounded px-2 py-1 bg-white mr-1"
        >
          {FONT_FAMILIES.map((f) => (
            <option key={f.label} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>

        {/* font size */}
        <select
          value={currentFontSize}
          onChange={handleFontSizeChange}
          className="text-xs border border-gray-200 rounded px-2 py-1 bg-white mr-2"
        >
          {FONT_SIZES.map((s) => (
            <option key={s.label} value={s.label}>
              {s.label}px
            </option>
          ))}
        </select>

        {/* basic */}
        <button type="button" className={btn} onClick={() => applyCommand("bold")}>
          <b>B</b>
        </button>
        <button type="button" className={btn} onClick={() => applyCommand("italic")}>
          <i>I</i>
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("underline")}
        >
          <u>U</u>
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("strikeThrough")}
        >
          S
        </button>

        {/* headings */}
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("formatBlock", "<h2>")}
        >
          H2
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("formatBlock", "<h3>")}
        >
          H3
        </button>

        {/* lists */}
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("insertUnorderedList")}
        >
          • List
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("insertOrderedList")}
        >
          1. List
        </button>

        {/* align */}
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("justifyLeft")}
        >
          ⬅
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("justifyCenter")}
        >
          ⬌
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("justifyRight")}
        >
          ➡
        </button>

        {/* link, quote, undo/redo */}
        <button type="button" className={btn} onClick={insertLink}>
          🔗
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => applyCommand("formatBlock", "<blockquote>")}
        >
          ❝ ❞
        </button>
        <button type="button" className={btn} onClick={() => applyCommand("undo")}>
          ↶
        </button>
        <button type="button" className={btn} onClick={() => applyCommand("redo")}>
          ↷
        </button>

        {/* clear */}
        <button type="button" className={btn} onClick={clearContent}>
          Clear
        </button>
      </div>

      {/* EDIT AREA */}
      <div
        ref={editorRef}
        className="p-3 text-sm outline-none"
        contentEditable
        style={{ minHeight: height }}
        onInput={handleInput}
      />
    </div>
  );
};

export default RichTextEditor;
