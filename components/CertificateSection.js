import styles from "./PageSection.module.css";

const CertificateSection = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CertificateSection;
