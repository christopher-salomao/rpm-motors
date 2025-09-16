import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Ops, parece que essa página não existe</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </main>
  );
}
