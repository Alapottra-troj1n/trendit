import { User } from "next-auth";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import Image from "next/image";
import { FaUserCircle } from 'react-icons/fa';
import { AvatarProps } from "@radix-ui/react-avatar";


interface Props extends AvatarProps { user: Pick<User, "name" | "image"> };

export default function UserAvatar({ user, ...props }: Props) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div>
          <Image
            fill
            src={user.image}
            alt="profile pic"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
            <span className="sr-only">
                {user?.name}
            </span>
            <FaUserCircle className="h-5 w-5" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
