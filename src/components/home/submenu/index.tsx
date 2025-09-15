"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import type { MenuProps } from "@/interfaces/menuType";
import styles from "./styles.module.scss";

interface SubmenuProps {
  menu: MenuProps;
}

export function Submenu({ menu }: SubmenuProps) {
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

        {menu.objects.map((item) => (
          <li key={item.slug}>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
