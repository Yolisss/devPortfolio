import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";

const SocialMedia = () => {
  return (
    <div className={styles.socialicon}>
      <a>
        <ImGithub />
      </a>
      <a>
        <ImLinkedin />
      </a>
      <a>
        <ImTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
