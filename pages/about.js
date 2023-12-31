import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

import PageSection from "../components/PageSection";
import CertificateSection from "../components/CertificateSection";

export default function About() {
  return (
    <div>
      <PageSection>
        <div className={styles.introduction}>
          {/* Red */}
          <div className={styles.profilePicture}>
            <Image
              src="/portrait.png" // Replace with the actual path and filename of your certification image
              alt="Profile picture"
              width={435} // Adjust the width and height according to your image's dimensions
              height={511}
            />
          </div>
          {/* Green */}
          <div className={styles.aboutSection}>
            <h1 className="mb-4">Hi, I'm Yolisma!</h1>
            <p className="mb-6">
              Welcome! I'm thrilled to have you join me on my remarkable journey
              from customer service to the thriving world of technology. As a
              first-generation Latina in the tech field, my goal is not just to
              talk about my personal aspirations and achievements but also to
              break barriers and pave the way for underrepresented individuals
              of color who dream of entering the world of technology. Along this
              journey, my ultimate aim is to secure a position as a software
              engineer, where I can continue to build my knowledge and skills in
              the field. If you're interested in learning more about my
              qualifications, certifications, and work history, I invite you to
              take a look at my resume, which is available for review. It
              showcases my relevant experiences, education, and skills that make
              me a strong candidate for software engineering roles. Feel free to
              reach out to me if you have any questions or would like to discuss
              potential opportunities for collaboration. Together, let's shatter
              stereotypes, challenge norms, and build a more inclusive and
              diverse tech community!
            </p>
            <div className={styles.resumediv}>
              <Link className="button" href="/resume.pdf">
                See My Resume
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection className={styles.sectionTwo}>
        <div className={styles.certification}>
          <div>
            <Image
              src="/certlogo.svg" // Replace with the actual path and filename of your certification image
              alt="Certificate Logo"
              width={350} // Adjust the width and height according to your image's dimensions
              height={331}
            />
          </div>
          <div className={styles.introToCertificate}>
            <h2 className={styles.hello}>My certifications</h2>
            <p>
              As a self-taught developer, I have dedicated my time to learning
              from different the resources available to me and have made many
              accomplishments along the way to represent the progress of my
              journey.
            </p>
          </div>
        </div>
        <CertificateSection
          imageSrc="/techtonica.png"
          imageAlt="Certificate Picture"
          title="Techtonica"
          date="June 2023"
          description="During my tenure at Techtonica, a demanding coding bootcamp, I
                honed my skills in the PERN stack, constructing a diverse
                portfolio of full-stack applications, including 'Guess my
                number,' 'JavaSweet Cafe' (a coffee application), and 'Lend A
                Paw' (a pet adoption application), thereby gaining hands-on
                experience and a strong foundation in developing robust and
                functional full-stack applications."
          href=""
        />

        <CertificateSection
          imageSrc="/shecodescertification.png"
          imageAlt="Certificate Picture"
          title="SheCodes: Introduction to Coding"
          date="March 2022"
          description="I completed the SheCodes online course, which covered the
                fundamentals of HTML, CSS, and JavaScript, along with practical
                experience in creating a landing page and participating in a
                project showcase."
          href=""
        />
      </PageSection>
    </div>
  );
}
