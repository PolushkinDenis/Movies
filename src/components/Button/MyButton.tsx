import React from "react";
import styles from "./MyButton.module.scss";

export interface Props {
  children: string;
}

function MyButton({ children }: Props) {
  return <div className={styles.button}>{children}</div>;
}

export default MyButton;
