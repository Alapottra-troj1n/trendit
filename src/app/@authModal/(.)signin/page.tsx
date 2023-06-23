'use client'
import SignIn from "@/components/SignIn";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/navigation";

type Props = {};

export default function page({}: Props) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-slate-950/50 text-white z-10">
      <div className="container flex items-center h-full max-h-lg mx-auto">
        <div className="relative bg-slate-800 lg:w-2/4 w-full mx-auto h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <CgClose onClick={()=> router.back()} className="cursor-pointer  text-white " />
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
}
