import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
export const metadata = {
  title: "Trendit",
  description:
    "Discover, Discuss, and Dive into the Latest Trends with Trendit!",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-slate-800 text-white antialiased dark", inter.className)}
    >
      <body className="min-h-screen pt-13 antialiased">
        <Navbar />
        <div className="max-w-7xl container mx-auto h-full pt-14">
        {children} 
        </div>
      </body>
    </html>
  );
}
