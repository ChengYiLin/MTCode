import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MTCode",
    template: "%s | MTCode",
  },
  description:
    "Martin's personal tech blog — writing about web development, tools, and software engineering.",
  openGraph: {
    title: "MTCode",
    description:
      "Martin's personal tech blog — writing about web development, tools, and software engineering.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} MTCode. Built with Next.js &amp;
            Tailwind.
          </div>
        </footer>
      </body>
    </html>
  );
}
