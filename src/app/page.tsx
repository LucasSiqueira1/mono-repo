import styles from "./page.module.css";

import { ButtonComponente, Typography } from "@shared/my-app";

export default function Home() {
  return (
    <div className={styles.page}>
      <ButtonComponente />
      <Typography />
    </div>
  );
}
