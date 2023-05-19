import styles from "./PageTitle.module.css";

export function PageTitle() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Creating basic Drag & Drop 👆</h1>
      <span className={styles.subtitle}>( without libraries )</span>
    </div>
  );
}
