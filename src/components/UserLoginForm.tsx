import { cn } from "@/lib/utils";


interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserLoginForm({className}: Props) {
  return (
    <div className={cn('flex justify-center', className)}>
        <button>Google</button>
    </div>
  )
}