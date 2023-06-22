import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div>
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
        <Link href="/resume.pdf">Download Resume</Link>
      </div>
      <div>
        <h3>Certifications:</h3>
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
      </div>
      <h4>Landing page for SheCodes:</h4>
      <Link href="/https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/000/777/058/original/FinalProject.html?1648515791">
        Final Project
      </Link>
    </div>
  );
}
