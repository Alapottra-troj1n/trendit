import { buttonVariants } from "@/components/ui/Button"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"


type Props = {}

export const useCustomToast = () => {
    const loginToast = () => {
        const {dismiss} = toast({
                title: "You're not signed in",
                description: 'Please sign-in to your account to continue',
                variant: 'destructive',
                action: (
                    <Link href={'/signin'} onClick={()=> dismiss()} className={buttonVariants({variant: 'outline'})} >Login</Link>
                )
        })
    }
    return {loginToast}
}