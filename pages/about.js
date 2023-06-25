import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.aboutcomponent}>
      <div className={styles.introprojectparagraph}>
        <p>
          Welcome! I'm thrilled to have you join me on my remarkable journey
          from customer service to the thriving world of technology. As a
          first-generation Latina in the tech field, my goal is not just to talk
          about my personal aspirations and achievements but also to break
          barriers and pave the way for underrepresented individuals of color
          who dream of entering the world of technology. Along this journey, my
          ultimate aim is to secure a position as a software engineer, where I
          can continue to build my knowledge and skills in the field. If you're
          interested in learning more about my qualifications, certifications,
          and work history, I invite you to take a look at my resume, which is
          available for review. It showcases my relevant experiences, education,
          and skills that make me a strong candidate for software engineering
          roles. Feel free to reach out to me if you have any questions or would
          like to discuss potential opportunities for collaboration. Together,
          let's shatter stereotypes, challenge norms, and build a more inclusive
          and diverse tech community!
        </p>
      </div>
      <div>
        <Link className={styles.resume} href="/resume.pdf">
          Download Resume
        </Link>
      </div>
      <div className={styles.certificationcomp}>
        <div className={styles.certificationtitle}>
          <h3>Certifications:</h3>
        </div>
        <h4>SheCodes: Introduction to Coding</h4>
        <p>
          I completed the SheCodes online course, which covered the fundamentals
          of HTML, CSS, and JavaScript, along with practical experience in
          creating a landing page and participating in a project showcase.
        </p>
        <Image
          src="/shecodescertification.png" // Replace with the actual path and filename of your certification image
          alt="Certification"
          width={500} // Adjust the width and height according to your image's dimensions
          height={300}
        />
        <h5>Landing page for SheCodes:</h5>
        <Image
          src="/newshecodesphoto.png" // Replace with the actual path and filename of your certification image
          alt="Certification"
          width={500} // Adjust the width and height according to your image's dimensions
          height={300}
        />
      </div>
      <div>
        {" "}
        <h4>Techtonica</h4>
      </div>
      <p>
        During my tenure at Techtonica, a demanding coding bootcamp, I honed my
        skills in the PERN stack, constructing a diverse portfolio of full-stack
        applications, including 'Guess my number,' 'JavaSweet Cafe' (a coffee
        application), and 'Lend A Paw' (a pet adoption application), thereby
        gaining hands-on experience and a strong foundation in developing robust
        and functional full-stack applications.
      </p>
      <div className={styles.techtonica}>
        <Image
          src="/techtonica.png" // Replace with the actual path and filename of your certification image
          alt="Certification"
          width={500} // Adjust the width and height according to your image's dimensions
          height={300}
        />
      </div>
    </div>
  );
}
