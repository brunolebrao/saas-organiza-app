import Link from "next/link"
import { ButtonClient } from "./client"
import { getServerSession } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const  Header = async () => {
  const session = await getServerSession()
  return (
    <header className="fixed flex w-full justify-between bg-primary text-slate-50 h-16 pl-64 pr-10">
      <div className="flex items-center px-4 md:px-10 lg:px-10  xl:px-10">
        <nav className="flex flex-1 max-w-2xl justify-start gap-8">
          <Link
            className="flex items-center space-x-2 text-sm font-medium transition-colors text-slate-50 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            href="/"
          >
            <span>Inicio</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-sm font-medium transition-colors text-slate-50 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            href="/public"
          >
            <span>Public</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-sm font-medium transition-colors text-slate-50 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            href="/private"
          >
            <span>Private</span>
          </Link>
          {session && <ButtonClient />}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/11524687?s=400&u=9de0d25b8795d569c3d71fbc7981bf3c8cbbf242&v=4" alt="@shadcn" />
            <AvatarFallback>USR</AvatarFallback>
          </Avatar>
        </div>
    </header>
  )
}
