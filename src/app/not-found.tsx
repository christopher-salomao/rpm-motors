import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Página não encontrada</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </main>
  )
}
