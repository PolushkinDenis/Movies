import React from "react";

export interface Props {
  children: any;
  classes: string;
  props: any;
}

function MyButton({ children, classes, ...props }: any) {
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}

export default MyButton;
