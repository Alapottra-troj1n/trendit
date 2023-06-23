import SignIn from "@/components/SignIn";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
export default function page() {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href={"/"}
         className="flex items-center underline text-sm"
        >
          <AiOutlineHome className="text-white mr-2 text-lg" />
          Back to Homepage
        </Link>
        <SignIn />
      </div>
    </div>
  );
}
