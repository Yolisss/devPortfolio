import React from "react";
import Link from "next/link";

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
    </div>
  );
}
