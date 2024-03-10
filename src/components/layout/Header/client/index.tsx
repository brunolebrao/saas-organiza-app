'use client'
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export const ButtonClient = () => {
  return <Button size='sm' onClick={() => signOut()}>Sair</Button>
}