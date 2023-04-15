import React from "react";

export interface Props {
  children: any;
  classes: string;
}

function MyButton({ children, classes }: Props) {
  return <div className={classes}>{children}</div>;
}

export default MyButton;
