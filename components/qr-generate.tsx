"use client";

import React, { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { LuClipboardPaste } from "react-icons/lu";
import { VscSymbolColor } from "react-icons/vsc";
import { Input } from "./ui/input";

const UrlColorPicker = () => {
  const [url, setUrl] = useState("https://drie.cz");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [foregroundColor, setForegroundColor] = useState("#000000");

  // Handle URL input change
  const handleUrlChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUrl(e.target.value);
  };

  // Handle paste from clipboard
  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  // Handle background color change (hex input)
  const handleBackgroundColorChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBackgroundColor(e.target.value);
  };

  // Handle foreground color change (hex input)
  const handleForegroundColorChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setForegroundColor(e.target.value);
  };

  return (
    <div className="h-full w-full p-6">
      {/* URL Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FaLink className="w-5 h-5 mr-2 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-700">URL</h2>
        </div>
        <div className="flex items-center gap-4">
          <Input
            maxLength={200}
            className="rounded-2xl w-full p-2 pl-3 mt-1"
            type="text"
            id="url"
            value={url}
            onChange={handleUrlChange}
            placeholder="https://drie.cz"
          />
          <button
            onClick={handlePasteFromClipboard}
            className="p-2 bg-gray-100 border  border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
          >
            <LuClipboardPaste className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Colors Section */}
      <div>
        <div className="flex items-center mb-2">
          <VscSymbolColor className="w-5 h-5 mr-2 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-700">Colors</h2>
        </div>
        <div className="flex justify-between flex-wrap">
          {/* Background Color */}
          <div className="flex-1 mr-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Background color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
                placeholder="#FFFFFF"
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="color"
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
                className="w-10 h-10 cursor-pointer"
              />
            </div>
          </div>

          {/* Foreground Color */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Foreground color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={foregroundColor}
                onChange={handleForegroundColorChange}
                placeholder="#000000"
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="color"
                value={foregroundColor}
                onChange={handleForegroundColorChange}
                className="w-10 h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlColorPicker;
