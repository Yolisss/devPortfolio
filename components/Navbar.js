import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.mainnav}>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/project">
            <li>Project</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
