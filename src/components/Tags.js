import React from "react";
import styles from "./Tags.module.scss";

export default function Tags({ name }) {
  return <div className={styles.tag}>#{name}</div>;
}
