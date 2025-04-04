import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../providers/theme-provider";
import { MainNav } from "../components/main-nav";
import DesktopNav from "@/components/desktop-nav";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes easily and quickly.",
  openGraph: {
    title: "QR Code Generator",
    description: "Generate QR codes easily and quickly.",
    url: "https://yourwebsite.com",
    siteName: "QR Code Generator",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Code Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // required for next-theme
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header className="h-16 container sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex h-16 items-center justify-between py-6 w-full">
                <Toaster position="top-center" />

                <MainNav />
                <DesktopNav />
              </div>
            </header>

            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
