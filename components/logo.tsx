import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as React from "react";
import { SVGProps, useEffect, useState } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this runs only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until theme is available
  if (!mounted) {
    return <div className="opacity-0">Gen-qrcode</div>;
  }
  const color = theme === "dark" ? "#ffffff" : "#000000"; // White for dark mode, Black for light mode

  return (
    <div
      className={cn("font-bold tracking-wide", props.className)}
      style={{
        fontSize: 20,
        color: color,
      }}
    >
      Gen-QRcode
    </div>
  );
};

export default Logo;
