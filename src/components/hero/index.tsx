import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface HeroProps {
  heading: string;
  buttonURL: string;
  buttonTitle: string;
  bannerURL: string;
  icon: ReactNode;
}

export function Hero({
  heading,
  buttonURL,
  buttonTitle,
  bannerURL,
  icon,
}: HeroProps) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bannerURL})` }}
    >
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a
          href={buttonURL}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.bunnerMocup}></div>
    </section>
  );
}
