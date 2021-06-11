import React from "react";
import styles from "./ButtonOutline.module.scss";

export default function ButtonOutline({ children }) {
  return <button className={styles.button}>{children}</button>;
}
