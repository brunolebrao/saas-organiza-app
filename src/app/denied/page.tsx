import Link from "next/link";

export default function Denied() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6">Acesso negado!</h1>
      <p className="text-base text-slate-600 mb-10">
        Você não tem permissão para prosseguir.
      </p>
      <Link href='/' className="p-4 bg-primary text-secondary rounded-md">Voltar</Link>
    </div>
  )
}