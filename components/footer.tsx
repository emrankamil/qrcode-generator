import { Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import ThemeSwitch from "./theme-changer";
import { Button } from "./ui/button";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="bg-background mx-auto w-full max-w-screen-xl px-6 md:px-20 z-50">
      <div className="border-t w-full py-6">
        <div className="md:flex gap-5">
          <div className="flex gap-4 pr-5 items-center justify-center w-full">
            <Link
              href="https://www.linkedin.com/in/emran-kamil/"
              target="_blank"
            >
              <Button variant="outline" className="px-2">
                <Linkedin size={18} />
              </Button>
            </Link>
            <Link href="https://github.com/emrankamil" target="_blank">
              <Button variant="outline" className="px-2">
                <Github size={18} />
              </Button>
            </Link>
            <Link href="https://leetcode.com/emrankamil" target="_blank">
              <Button variant="outline" className="px-2">
                <SiLeetcode size={18} />
              </Button>
            </Link>
            <Link href="https://x.com/emexnord" target="_blank">
              <Button variant="outline" className="px-2">
                <FaXTwitter size={18} />
              </Button>
            </Link>
            <div className="flex justify-center items-center pr-2 cursor-pointer">
              <ThemeSwitch />
            </div>
          </div>
        </div>
        <p className="pt-8">© {getYear()} Emran kamil</p>
      </div>
    </footer>
  );
}
