'use client'

import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { useState } from "react";
import {signIn} from 'next-auth/react'
import { BsGoogle } from 'react-icons/bs';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserLoginForm({ className, ...props }: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async() => {
        setIsLoading(true);
        try {
            await signIn('google')
        } catch (error) {
            //error notification

            
        }finally{
            setIsLoading(false)
        }
    }

  return (
    <div {...props} className={cn("flex justify-center", className)}>
      <Button onClick={loginWithGoogle} isLoading={isLoading} size='sm' className="w-full" >{isLoading ? null : <BsGoogle className="text-lg mr-2"/>} Continue with Google </Button>
    </div>
  );
}
