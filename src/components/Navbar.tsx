import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import NavLinks from "./NavLinks";



export default async function Navbar() {

  const session = await getAuthSession();
  
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-slate-900 border-slate-700 z-[10] py-3">
        <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">

          <Link href="/" className="flex gap-2 items-center ">
              <img src="/trendit.png" className="w-8" alt="logo" />
            <p className="hidden text-slate-100 text-sm font-medium md:block">Trendit</p>

          </Link>


         {session?.user ?  <NavLinks user={session.user}/> : <Link href={'/signin'} className={buttonVariants()}>
            Sign In
          </Link>}

        </div>
    </div>
  )
}
