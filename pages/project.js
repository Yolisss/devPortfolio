import React from "react";
import CertificateSection from "../components/CertificateSection";
import PageSection from "../components/PageSection";
import ProjectSection from "../components/ProjectSection";
import styles from "../styles/Home.module.css";

export default function Project() {
  return (
    <div className={styles.projectcomponent}>
      <PageSection>
        <h1>Projects</h1>
        <p className={styles.introprojectparagraph}>
          As a junior software engineer, I am steadily building my experience in
          the tech industry. What truly drives me is the opportunity to work on
          applications that have a meaningful impact on others. Recently, I had
          the privilege of creating two full stack apps that revolve around
          topics close to my heart. One of them is "JavaSweet Cafe," a
          delightful coffee app that brings together java lovers to explore and
          savor unique brews. The other is "Lend A Paw," an adoption application
          that connects shelter animals with loving homes. I take immense pride
          in these projects, as they represent my dedication to merging my
          technical skills with my passions. With every line of code, I strive
          to improve and excel, and I am eager to continue honing my abilities
          to contribute even more to the tech world.
        </p>
      </PageSection>
      <PageSection>
        <CertificateSection
          imageSrc="/officiallendapawlogo.png"
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
      <div className={styles.collaborationsection}>
        <h3 className={styles.projectheader}>Collaborations</h3>
        <div className={styles.projectparagraph}>
          <div className={styles.projecttitle}>
            <h4>Techtonica Time Vault</h4>
          </div>
          <p>
            Techtonica Time Vault is a dynamic forum created by a group of
            developers and I, from the Techtonica program, providing a
            centralized platform to track progress, share solutions, and engage
            in collaborative discussions about all the code challenges completed
            throughout the program.
          </p>
          <br />
          <a
            href="https://github.com/rubycmarroquin/techtonica-time-vault/tree/master"
            target="_blank"
          >
            View Project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
