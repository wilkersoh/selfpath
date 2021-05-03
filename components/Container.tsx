import React from "react";

interface ContainerProps {
  classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, classes = "" }) => {
  return <div className={`px-4 mx-auto${classes}`}>{children}</div>;
};

export default Container;
