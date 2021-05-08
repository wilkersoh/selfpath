import React from "react";

type MaxWidthType = "max-w-screen-xl" | "max-w-6xl";

interface ContainerProps {
  classes?: string;
  maxWidth?: MaxWidthType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  classes = "",
  maxWidth = "max-w-6xl",
}) => {
  return (
    <div className={`px-4 mx-auto ${maxWidth} ${classes}`}>{children}</div>
  );
};

export default Container;
