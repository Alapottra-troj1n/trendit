import Link from "next/link";
import UserLoginForm from "./UserLoginForm";

export default function SignIn() {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <img src="/trendit.png" className="w-8 mx-auto" alt="" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-sm max-w-lg mx-auto pb-5">
          When you proceed, you are actively setting up a Trendit account and
          acknowledging your agreement with the terms and conditions of this
          community.
        </p>

        <UserLoginForm />

        <p className="text-slate-100 text-center px-8 text-sm">
            New to Trendit ? {' '}
            <Link className="underline-offset-4 text-sm underline font-semibold" href={'/signup'}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
