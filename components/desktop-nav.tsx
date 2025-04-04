"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import ThemeSwitch from "./theme-changer";
import { Github, Linkedin } from "lucide-react";

function DesktopNav() {
  return (
    <nav>
      <div className="md:flex gap-5">
        <div className="flex gap-2 pr-5 items-center">
          <Link href="https://github.com/emrankamil" target="_blank">
            <Github size={18} className="mr-3" />
          </Link>
          <Link href="https://www.linkedin.com/in/emran-kamil/" target="_blank">
            <Linkedin size={18} className="mr-3" />
          </Link>
          <div className="flex justify-center items-center pr-2 cursor-pointer">
            <ThemeSwitch />
          </div>
          <Link href="#">
            <Button variant="outline">Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNav;
