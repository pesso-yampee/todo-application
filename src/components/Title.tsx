import styles from "./Title.module.css";

export function Title() {
  return (
    <div>
      <h1 className={styles.title}>Creating basic Drag & Drop 👆</h1>
      <span className={styles.subtitle}>( without libraries )</span>
    </div>
  );
}
