import React from "react";
import { QRCodeGenerator } from "../components/qr-generator";
import GridPattern from "../components/ui/animted-grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-screen">
        <GridPattern
          width={70} // Set horizontal line spacing
          height={70} // Set vertical line spacing
        />

        <section className="relative w-full h-[85dvh] z-10 pl-5">
          <Hero />
        </section>
      </div>

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10"
      >
        <QRCodeGenerator />
      </section>
    </div>
  );
}
