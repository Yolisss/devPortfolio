import styles from "./CertificateSection.module.css";
import Image from "next/image";
import Link from "next/link";

const CertificateSection = ({
  imageSrc,
  imageAlt,
  title,
  date,
  description,
  imageFirst = true,
  href = "",
}) => {
  return (
    <div className={styles.certificateSection} data-image-first={imageFirst}>
      {/* //created a classname to target picture and use
             flex-shrink as a way to avoid it being shrunk */}
      <div className={styles.certificatePicture}>
        <Image
          src={imageSrc} // Replace with the actual path and filename of your certification image
          alt={imageAlt}
          width={350} // Adjust the width and height according to your image's dimensions
          height={260}
        />
      </div>
      <div className={styles.certificateDescription}>
        <h3>{title}</h3>
        <div className="mb-4">
          <em>{date}</em>
        </div>
        <p className={styles.description}>{description}</p>
        {href === "" ? null : <Link href={href}>View my project</Link>}
      </div>
    </div>
  );
};

export default CertificateSection;
