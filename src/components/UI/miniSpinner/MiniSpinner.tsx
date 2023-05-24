import React, {CSSProperties, FC} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const MiniSpinner: FC = () => {
  return (
    <ClipLoader
      color={'#ffffff'}
      loading={true}
      cssOverride={override}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default MiniSpinner;