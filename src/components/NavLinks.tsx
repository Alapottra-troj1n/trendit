'use client'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { User } from "next-auth";
import UserAvatar from "./UserAvatar";

type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

export default function NavLinks({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar className="h-8 w-8" user={user} />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
