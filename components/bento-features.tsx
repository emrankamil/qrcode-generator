"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaLink } from "react-icons/fa6";
import { LuClipboardPaste } from "react-icons/lu";
import { VscSymbolColor } from "react-icons/vsc";
import { Input } from "./ui/input";

export function BentoDemo() {
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
    <div
      className={
        "grid w-full auto-rows-[22rem] grid-cols-2 gap-4 lg:grid-rows-3"
      }
    >
      <div
        className={cn(
          "p-6 rounded-xl",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
        )}
      >
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

      {/*  */}
      <div
        className={cn(
          "group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-xl",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
        )}
      >
        {/* <div
          ref={canvasRef}
          className="rounded-2xl flex items-center justify-center bg-background shadow-md p-4"
        >
          <QRCodeCanvas
            size={350}
            bgColor={bgColor}
            fgColor={fgColor}
            value={URL}
            level={errorCorrection}
          />
        </div> */}

        <div className="pointer-events-none absolute inset-0  " />
      </div>
      {/*    */}
      <div
        className={cn(
          "group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-xl",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
        )}
      >
        {/* <div>{<img className="absolute -right-20 -top-20 opacity-60" />}</div> */}
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 ">
          {/* <Icon className="h-12 w-12 origin-left text-neutral-700  ease-in-out " /> */}
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Automated Generation
          </h3>
          <p className="max-w-lg text-neutral-400">
            Instantly generate well-structured survey questions from just a
            title, powered by AI.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0  " />
      </div>

      {/*  */}
      <div
        className={cn(
          "group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-xl",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
        )}
      >
        {/* <div>{<img className="absolute -right-20 -top-20 opacity-60" />}</div> */}
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 ">
          {/* <Icon className="h-12 w-12 origin-left text-neutral-700  ease-in-out " /> */}
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Automated Generation
          </h3>
          <p className="max-w-lg text-neutral-400">
            Instantly generate well-structured survey questions from just a
            title, powered by AI.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0  " />
      </div>
    </div>
  );
}
