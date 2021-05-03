import React from "react";

export const Heading = ({ children }) => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "2rem" }}>{children}</h1>
    </div>
  );
};
