'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { routes } from "@/routes"

export const SideBar = () => {
  const path = usePathname()
  return (
    <div className="fixed flex flex-col w-64 h-screen bg-gray-100 border-r border-gray-200">
      <div className="flex items-center justify-center border-b border-gray-200 bg-pr h-16">
        <h1 className="text-lg font-bold text-orange-700">Gaby $ Organiza</h1>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <nav className="grid gap-1">
          {routes.map(({ title, Icon, href }) => (
            <Link
              key={title}
              className={`flex items-center rounded-lg ${path === href ? 'bg-primary text-slate-50': 'bg-gray-100' } px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-slate-50 dark:bg-gray-800 dark:hover:bg-gray-800/50`}
              href={href}
            >
              <Icon className="h-5 w-5 text-orange-700 mr-2" />
              {title}
            </Link>
          ))}

        </nav>
      </div>
    </div>
  )
}