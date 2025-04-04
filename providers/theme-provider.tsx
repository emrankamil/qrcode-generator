"use client";

// import hideRechartsConsoleError from "@/utils/recharts-console-error";
import { ThemeProvider as NextThemeProvider } from "next-themes";

// hideRechartsConsoleError();

export function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
  return (
    <NextThemeProvider
      attribute={"class"}
      enableSystem={false}
      defaultTheme={"light"}
    >
      {children}
    </NextThemeProvider>
  );
}
