import styles from "./loading.module.scss"

export function LoadingPost() {
  return (
    <main className={styles.loading}>
      <h1>Carregando página...</h1>
    </main>
  );
}
