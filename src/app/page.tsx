import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl">Your Feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-4 py-6">
        {/* news feed */}

        {/* subreddit info */}
        <div className="overflow-hidden h-fit rounded-lg border bg-slate-800 order-first md:order-last ">
          <div className="bg-cyan-800/50 px-6 py-4">
            <p className="font-semibold py-3 flex items-center gap-1.5">
              <AiTwotoneHome />
              Home
            </p>
          </div>
          <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-slate-300">
                Your personal Trendit. Let's find some cool communities
              </p>
            </div>

            <Link className={buttonVariants({
              className: 'w-full mt-4 mb-6'
            })} href={'/r/create'} >Create Community</Link>
          </div>
        </div>
      </div>
    </>
  );
}
