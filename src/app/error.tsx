"use client"

import Link from "next/link"



export default function Error() {
  return (
    <main className="error">
      <h1>Ops, algum erro inesperado aconteceu</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </main>
  )
}
