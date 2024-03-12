'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { routes } from "@/routes"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HomeIcon, UserIcon, DocumentTextIcon, CogIcon, Bars4Icon, ChevronDoubleLeftIcon } from '@heroicons/react/20/solid'

export const SideBar = () => {
  const path = usePathname()
  const [openNav, setOpenNav ] = useState<boolean>()
  return (
    <div className="fixed h-full top-0 left-0 z-10">
      <div
        className={` ${
          openNav ? "w-48" : "w-16 "
        } bg-dark-purple h-full relative duration-300`}
      >
        <ChevronDoubleLeftIcon className={`absolute cursor-pointer -right-4 top-5 w-7  text-slate-500
           rounded-full  ${!openNav && "rotate-180"}`}
          onClick={() => setOpenNav(!openNav)}/>
        <div className="flex gap-x-2 p-3 items-center">
          <img
            src="/img/logo.png"
            className={`cursor-pointer duration-500 w-10 ${
              openNav && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !openNav && "scale-0"
            }`}
          >
            Organiza
          </h1>
        </div>
        <ul className="pt-6 bg-gray-100 h-full">
          {routes.map(({Icon, href, title, gap}) => (
            <li
              key={title}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <Link
                key={title}
                className={`flex w-full items-center rounded-lg ${path === href ? 'bg-primary text-slate-50': 'bg-gray-100' } px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-slate-50 dark:bg-gray-800 dark:hover:bg-gray-800/50`}
                href={href}
              >
                <Icon className="h-5 w-5 text-orange-700" />
                <span className={`${!openNav && "hidden"} origin-left duration-200 ml-1`}>
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="flex-1 overflow-auto p-4">
          <nav className="grid gap-1">
            {routes.map(({ title, Icon, href }) => (
              <Link
                key={title}
                className={`flex items-center rounded-lg ${path === href ? 'bg-primary text-slate-50': 'bg-gray-100' } px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-slate-50 dark:bg-gray-800 dark:hover:bg-gray-800/50`}
                href={href}
              >
                <Icon className="h-5 w-5 text-orange-700 mr-2" />
                <span className={`${!openNav && "hidden"} origin-left duration-200`}>
                  {title}
                </span>
              </Link>
            ))}
  
          </nav>
        </div> */}
      </div>
    </div>
  )
}