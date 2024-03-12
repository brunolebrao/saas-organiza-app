// "use client"
import Link from "next/link"
import { ButtonClient } from "./client"
import { getServerSession } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const  Header = async () => {
  const session = await getServerSession()
  return (
    <header className="fixed top-0 left-0 flex w-full justify-end bg-primary text-slate-50 h-16 pl-16 pr-10 z-10">
      <div className="flex items-center px-4 md:px-10 lg:px-10  xl:px-10">
        <nav className="flex flex-1 max-w-2xl justify-start gap-8">
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
