"use client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/Button";
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";
import axios, { AxiosError } from "axios";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { toast } from "./ui/use-toast";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  subredditId: string,
  subredditName: string,
  isSubscribed: boolean
}

export default function SubscribeLeaveToggle({ subredditId, subredditName, isSubscribed }: Props) {
  const { loginToast } = useCustomToast();
  const router = useRouter();

  const {mutate: subscribe, isLoading: isSubLoading} = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      };
      const { data } = await axios.post("/api/subreddit/subscribe", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      return toast({
        title: 'Something went wrong',
        description: 'There was something wrong while processing the subscription',
        variant: 'destructive'
      })
    },
    onSuccess: () => {
      startTransition(()=> {
          router.refresh()
      })

      return toast({
        title: 'Success',
        description: `You have subscribed to r/${subredditName}`
      })
    }
  });

  return (
    <div className="py-3">
      {isSubscribed ? (
        <Button className="w-full mt-1 mb-4">Leave Community</Button>
      ) : (
        <Button isLoading={isSubLoading} onClick={()=> subscribe()} className="w-full mt-1 mb-4">Join to Post</Button>
      )}
    </div>
  );
}
