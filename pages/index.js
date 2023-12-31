import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import SocialMedia from "../components/SocialMedia";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className={styles.socialcomponent}>
        <h2 className={styles.hometext}>Hello, I'm Yolis!</h2>
        <h4 className={styles.hometext}>
          Junior Fullstack Developer | First Generation Latina | Boba addict
        </h4>
      </div>
    </div>
  );
}
