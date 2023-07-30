import React from "react";
import CertificateSection from "../components/CertificateSection";
import PageSection from "../components/PageSection";

import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.css";

export default function Project() {
  return (
    <div className={styles.projectcomponent}>
      <PageSection className="my-12">
        <div className={styles.projtitle}>
          <h1>Projects</h1>
        </div>
        <div className={styles.introprojectparagraph}>
          <div className={styles.projecticon}>
            <img src="projecticon.png" />
          </div>
          <div className={styles.projparagraph}>
            <p>
              As a junior software engineer, I am steadily building my
              experience in the tech industry. What truly drives me is the
              opportunity to work on applications that have a meaningful impact
              on others. Recently, I had the privilege of creating two full
              stack apps that revolve around topics close to my heart. One of
              them is "JavaSweet Cafe," a delightful coffee app that brings
              together java lovers to explore and savor unique brews. The other
              is "Lend A Paw," an adoption application that connects shelter
              animals with loving homes. I take immense pride in these projects,
              as they represent my dedication to merging my technical skills
              with my passions. With every line of code, I strive to improve and
              excel, and I am eager to continue honing my abilities to
              contribute even more to the tech world.
            </p>
          </div>
        </div>

        <CertificateSection
          imageSrc="/lendapawlogo.png"
          imageAlt="Project Picture"
          title="Lend A Paw"
          date="Jun 2023"
          description="Lend A Paw is a PERN stack application that supports animals through
            adoption, volunteering, donating, fostering, and more!"
          href="https://github.com/Yolisss/Lend-A-Paw"
        />

        <CertificateSection
          imageFirst={false}
          imageSrc="/javasweetlogo.png"
          imageAlt="Project Picture"
          title="JavaSweet Cafe"
          date="Dec 2022"
          description="About JavaSweet Cafe is a PERN stack application designed to allow
            coffee lovers to create drinks in the comfort of their own home.
            This space allows clients to document any drinks that they may
            create on their own."
          href="https://github.com/Yolisss/2.0JSCafeProject"
        />
      </PageSection>
      <PageSection>
        <div className={styles.collabcontent}>
          <div className={styles.staricon}>
            <h3>Collaborations</h3>
            <a
              className="github-button"
              href="https://github.com/rubycmarroquin/techtonica-time-vault"
              data-color-scheme="no-preference: light; light: light; dark: light;"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star rubycmarroquin/techtonica-time-vault on GitHub"
            >
              Star
            </a>
          </div>
          <div className={styles.projectparagraph}>
            <div className={styles.projecttitle}>
              <h4 className="mb-4">Techtonica Time Vault</h4>
            </div>
            <div>
              <p>
                Techtonica Time Vault is a dynamic forum created by a group of
                developers and I, from the Techtonica program, providing a
                centralized platform to track progress, share solutions, and
                engage in collaborative discussions about all the code
                challenges completed throughout the program.
              </p>
            </div>
            <br />
            <div className={styles.collabdiv}>
              <Link
                className={styles.button}
                href="https://github.com/rubycmarroquin/techtonica-time-vault/tree/master"
                target="_blank"
              >
                View Project on GitHub
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
