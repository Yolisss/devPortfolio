import styles from "./PageSection.module.css";

const PageSection = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageSection;
