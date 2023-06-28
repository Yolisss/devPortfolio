import styles from "./PageSection.module.css";

const PageSection = ({ children, className = "" }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default PageSection;
