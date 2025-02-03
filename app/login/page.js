import logo from "@/public/next.svg";
import Image from "next/image";

export default function Login() {
  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
                className="mx-auto"
                src={logo}
                width={72}
                height={72}
                alt="logo"
                priority
                />
            <h2 className="mt-10 text-center text-3xl tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-10 mx-auto" action="#" method="POST">
            <button type="submit" className="mx-auto rounded-md bg-[var(--mz-primary-color)] hover:bg-[var(--mz-secondary-color)] px-4 py-2 text-xl text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </form>
    </div>
    </>
  );
}
