"use client";

import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import UserAvatar from "./UserAvatar";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { AiOutlineLink } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
interface Props {
  session: Session | null;
}

export default function MiniCreatePost({ session }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="overflow-hidden rounded-md bg-slate-700 shadow">
      <div className="h-full px-6 py-4 flex justify-between gap-6">
        <div className="relative">
          <UserAvatar
            user={{ name: session?.user.name, image: session?.user.image }}
          />
          <span className="absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-500 outline outline-2 outline-white"/>
            
        </div>

     
            <Input readOnly placeholder="Create a Post" onClick={()=> router.push(pathname + '/submit')} />
            <Button className="bg-transparent hover:bg-transparent" onClick={()=> router.push(pathname + '/submit')}><BsImage className="text-white text-xl"/></Button>
            <Button className="bg-transparent hover:bg-transparent"  onClick={()=> router.push(pathname + '/submit')}><AiOutlineLink className="text-white text-xl"  /></Button>
           
   
           
   
      </div>
    </div>
  );
}
