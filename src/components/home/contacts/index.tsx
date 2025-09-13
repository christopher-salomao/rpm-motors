import { HomeProps } from "@/interfaces/home.type";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

import styles from "./styles.module.scss";

export function Contacts({ object }: HomeProps) {
  return (
    <section className={styles.contactsContainer} id="contatos">
      <div className={styles.contacts}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={28} color="#ffffff" />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contacts.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={28} color="#ffffff" />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contacts.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <MapPin size={28} color="#ffffff" />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contacts.address}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color="#ffffff" />
            <div>
              <strong>Horário de funcionamento</strong>
              <p>{object.metadata.contacts.time}</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href={object.metadata.cta_button.url}
        target="_blank"
        rel="noreferrer noopener"
        className={styles.link}
      >
        <Phone size={24} color="#ffffff" />
        {object.metadata.cta_button.title}
      </a>
    </section>
  );
}
