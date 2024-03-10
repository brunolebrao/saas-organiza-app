'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

type TInputs = {
  email: string
  password: string
}


export const FormLogin = () => {
  const { handleSubmit, register, formState: { errors }  } = useForm<TInputs>()
  const { push } = useRouter()

  const onSubmit = async (data: TInputs) => {
    const { email, password } = data
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      console.log('%c⧭', 'color: #0088cc', response);
      if(response?.status === 200) {
        push('/private')
      }
    } catch (error) {
      toast({title: 'Erro', description: 'Credenciais inválidas'})
    };
  }

  return (
      <Card className="w-full max-w-sm p-6 border border-gray-200 shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <CardHeader className="space-y-2">
          <div className="grid gap-1 text-center">
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <CardDescription>Digite seu e-mail e senha para entrar</CardDescription>
          </div>
        </CardHeader>
       <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input autoFocus {...register('email', { required: 'E-mail é obrigatório' })} />
              {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input {...register('password', { required: 'Senha é obrigatório' })} />
              {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
            </div>
            <Button className="w-full" type="submit">Entrar</Button>
            <Button className="w-full" variant="outline">
              Entrar com Google
            </Button>
            <div className="mt-4 text-center text-sm">
              Não tem uma conta?
              <Link className="underline" href="#">
                Inscreva-se
              </Link>
            </div>
          </CardContent>
       </form>
      </Card>
  )
}

