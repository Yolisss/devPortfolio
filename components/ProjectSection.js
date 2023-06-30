import styles from "./CertificateSection.module.css";
import Image from "next/image";

const ProjectSection = ({ imageSrc, imageAlt, title, date, description }) => {
  return (
    <div className={styles.projectSection}>
      {/* //created a classname to target picture and use
             flex-shrink as a way to avoid it being shrunk */}
      <div className={styles.projectPicture}>
        <Image
          src={imageSrc} // Replace with the actual path and filename of your certification image
          alt={imageAlt}
          width={350} // Adjust the width and height according to your image's dimensions
          height={260}
        />
      </div>
      <div className={styles.projectDescription}>
        <h3>{title}</h3>
        <div className="mb-4">
          <em>{date}</em>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectSection;
