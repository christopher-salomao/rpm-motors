import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        RPM Motors | Desencolvido por{" "}
        <a
          href="https://github.com/christopher-salomao"
          target="_blank"
          rel="noreferrer noopener"
        >
          Christopher Salomão
        </a>
      </span>
    </footer>
  );
}
