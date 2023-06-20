import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className={styles.mainnav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
