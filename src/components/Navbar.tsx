import Link from "next/link";



export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-slate-900 border-slate-700 z-[10] py-3">
        <div className="container max-w-7xl h-full mx-auto items-center justify-between gap-2">

          <Link href="/" className="flex gap-2 items-center">
              <img src="/trendit.png" className="w-8" alt="logo" />
            <p className="hidden text-slate-100 text-sm font-medium md:block">Trendit</p>

          </Link>

        </div>
    </div>
  )
}
