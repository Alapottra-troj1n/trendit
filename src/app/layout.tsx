import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
export const metadata = {
  title: "Trendit",
  description:
    "Discover, Discuss, and Dive into the Latest Trends with Trendit!",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-slate-800 text-white antialiased dark",
        poppins.className
      )}
    >
      <body className="min-h-screen pt-13 antialiased">
       <Providers>
         {/*@ts-expect-error server component*/}
         <Navbar />
        {authModal}
        <div className="max-w-7xl container mx-auto h-full pt-20">
          {children}
      
        </div>
        <Toaster />
       </Providers>
      </body>
    </html>
  );
}
