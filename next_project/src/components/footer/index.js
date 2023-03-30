import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with by <Link href="htts://github.com/ELsenV"> E.V </Link>
    </footer>
  );
}

export default Footer;
