import Image from "next/image";

import type { HomeProps } from "@/interfaces/home.type";

import styles from "./styles.module.scss";

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h2 className={styles.title}>Sobre</h2>
          <p>{object.metadata.about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa sobre a RPM Motors"
            src={object.metadata.about.banner.url}
            quality={100}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>
      </section>

      <h2 className={styles.titleServices}>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt={service.description}
                src={service.image.url}
                quality={100}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1024px) 75vw, 50vw"
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
