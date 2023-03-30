import React from "react";
import styles from "./style.module.css";

function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default Loading;
