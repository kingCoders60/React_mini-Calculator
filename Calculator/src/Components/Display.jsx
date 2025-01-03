import styles from "./Display.module.css";

export const Display = ({ value }) => {
  return (
    <input className={styles.display} type="text" value={value} readOnly />
  );
};
