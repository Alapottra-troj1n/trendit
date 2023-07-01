import { toast } from "@/components/ui/use-toast"


type Props = {}

export default function useCustomToast({}: Props) {
    const loginToast = () => {
        const {dismiss} = toast({

        })
    }
    return {loginToast}
}