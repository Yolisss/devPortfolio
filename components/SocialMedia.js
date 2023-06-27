import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";

const SocialMedia = () => {
  return (
    <div className={styles.socialicon}>
      <a href="https://github.com/Yolisss">
        <ImGithub size={21} />
      </a>
      <a href="https://www.linkedin.com/in/yolisma-zacarias4/">
        <ImLinkedin size={21} />
      </a>
      <a href="https://twitter.com/Yolissss_">
        <ImTwitter size={21} />
      </a>
    </div>
  );
};

export default SocialMedia;
