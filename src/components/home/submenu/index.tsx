"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { X, Menu } from "lucide-react";

import styles from "./styles.module.scss";

export function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togleMenu = () => setIsOpen(!isOpen);

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={togleMenu}>
        <Menu size={34} color="#121212" />
        <span>Serviços</span>
      </div>

      <ul className={isOpen ? styles.open : ""}>
        {isOpen && (
          <button className={styles.closeMenu} onClick={togleMenu}>
            <X size={54} color="#121212" />
          </button>
        )}

        <li>
          <Link href="/post/pagina-1">Página 1</Link>
        </li>

        <li>
          <Link href="/post/pagina-2">Página 2</Link>
        </li>
        <li>
          <Link href="/post/pagina-3">Página 3</Link>
        </li>
      </ul>
    </section>
  );
}
