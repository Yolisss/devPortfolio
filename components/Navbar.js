import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.generalnav}>
        <div>
          <Image src="/Yolis.png" width={200} height={200} />
        </div>
        <ul className={styles.mainnav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* <li>
            <Link href="/blog">Blog</Link>
          </li> */}
          <li>
            <Link href="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
