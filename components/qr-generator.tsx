"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FaLink } from "react-icons/fa6";
import { LuClipboardPaste } from "react-icons/lu";
import { VscSymbolColor } from "react-icons/vsc";
import { Input } from "./ui/input";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import { Badge } from "./ui/badge";
import { track } from "@vercel/analytics";

export function QRCodeGenerator() {
  const [url, setUrl] = useState("https://github.com/emrankamil");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [errorCorrection, setErrorCorrection] = useState<"L" | "M" | "Q" | "H">(
    "L"
  );

  const canvasRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(400);

  const saveToPNG = () => {
    track("qr-code-exported", { format: "png" });
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      const newCanvas = document.createElement("canvas");
      newCanvas.width = size;
      newCanvas.height = size;

      const context = newCanvas.getContext("2d");
      if (context) {
        context.drawImage(canvas, 0, 0, newCanvas.width, newCanvas.height);
      }

      const pngFile = newCanvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = "emex.nord QR code";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    }
  };

  const saveToWEBP = () => {
    track("qr-code-exported", { format: "webp" });
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      const newCanvas = document.createElement("canvas");
      newCanvas.width = size;
      newCanvas.height = size;

      // Draw the QR code on the new canvas
      const context = newCanvas.getContext("2d");
      if (context) {
        context.drawImage(canvas, 0, 0, newCanvas.width, newCanvas.height);
      }

      // Convert the new canvas to a PNG image
      const webpFile = newCanvas.toDataURL("image/webp");

      const downloadLink = document.createElement("a");
      downloadLink.download = "emex.nord QR code";
      downloadLink.href = `${webpFile}`;
      downloadLink.click();
    }
  };

  const saveToClipboard = () => {
    track("qr-code-exported", { format: "clipboard" });
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);
        }
      });
    }
  };

  const saveToPDF = () => {
    track("qr-code-exported", { format: "pdf" });
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      pdf.setFontSize(12);
      pdf.text("emex.nord", 20, 20, { align: "center" });
      pdf.addImage(imgData, "PNG", 8, 28, 60, 60);
      pdf.output("dataurlnewwindow");
    }
  };

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
    <div className={"flex flex-col lg:flex-row lg:gap-6"}>
      <div className="flex gap-6 py-4 lg:py-8 flex-col w-full lg:w-[750px]">
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
                placeholder="https://github.com/emrankamil"
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
          <div className="rounded-2xl bg-background shadow-md p-8">
            <div className="flex items-center gap-2">
              <MdOutlineFileDownload
                size={18}
                className="text-muted-foreground"
              />
              <h1 className="font-semibold text-xl">Export</h1>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full mt-3 select-none"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-12 !justify-normal">
                  <CiSettings size={18} className="text-muted-foreground" />
                  Settings
                </AccordionTrigger>
                <AccordionContent className="flex justify-between gap-4">
                  <div className="w-full">
                    <p className="text-muted-foreground text-sm font-semibold mb-1">
                      Error correction
                    </p>
                    <Select
                      onValueChange={(value) => {
                        setErrorCorrection(value as "L" | "M" | "Q" | "H");
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="L - 7%" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L">L - 7%</SelectItem>
                        <SelectItem value="M">M - 15%</SelectItem>
                        <SelectItem value="Q">Q - 25%</SelectItem>
                        <SelectItem value="H">H - 30%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <p className="text-muted-foreground text-sm font-semibold mb-1">
                      QR code size
                    </p>
                    <Select
                      onValueChange={(value) => {
                        setSize(Number(value));
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="400px" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="200">200px</SelectItem>
                        <SelectItem value="400">400px</SelectItem>
                        <SelectItem value="600">600px</SelectItem>
                        <SelectItem value="800">800px</SelectItem>
                        <SelectItem value="1000">1000px</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-wrap gap-2 mt-3 select-none *:cursor-pointer">
              <Badge
                onClick={saveToClipboard}
                variant="default"
                className="text-base"
              >
                Copy
                <LuClipboardPaste size={14} className="ml-2" />
              </Badge>
              <Badge
                variant="default"
                onClick={saveToPNG}
                className="text-base bg-blue-500 hover:bg-blue-400"
              >
                PNG
                <MdOutlineFileDownload size={14} className="ml-2" />
              </Badge>
              <Badge
                variant="default"
                onClick={saveToPDF}
                className="text-base bg-red-500 hover:bg-red-400"
              >
                PDF
                <BsPrinter size={14} className="ml-2" />
              </Badge>
              <Badge
                onClick={saveToWEBP}
                variant="default"
                className="text-base bg-green-500 hover:bg-green-400"
              >
                WEBP
                <MdOutlineFileDownload size={14} className="ml-2" />
              </Badge>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0  " />
        </div>
      </div>
      {/*    */}
      <div className="gap-6 flex py-4 lg:py-8 flex-col w-full lg:w-[400px]">
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
          <div
            ref={canvasRef}
            className="rounded-2xl flex items-center justify-center bg-background shadow-md p-4"
          >
            <QRCodeCanvas
              size={350}
              bgColor={backgroundColor}
              fgColor={foregroundColor}
              value={url}
              level={errorCorrection}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
