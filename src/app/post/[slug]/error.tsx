"use client"

import Link from "next/link"

import styles from "./error.module.scss"

export default function Error() {
  return (
    <main className={styles.error}>
      <h1>Ops, parece que essa página não existe</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </main>
  )
}
