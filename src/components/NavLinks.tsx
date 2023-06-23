"use client";

import { User } from "next-auth";
import UserAvatar from "./UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import Link from "next/link";
import { signOut } from "next-auth/react";

type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

export default function NavLinks({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar className="h-8 w-8" user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-slate-600 rounded-sm text-slate-100"
        align="end"
      >
        <div className="flex items-center justify-end gap-2 p-3">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="text-xs w-[200px] truncate text-slate-300">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href={"/"}>Feed</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/r/community"}>Create Community</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/"}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <button onClick={()=> signOut({callbackUrl: `${window.location.origin}/signin`})}>Sign Out</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
