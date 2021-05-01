import React from "react";

interface ContainerProps {
  classes?: String;
}

const Container: React.FC<ContainerProps> = ({ children, classes = "" }) => {
  return (
    <div className={`px-4 mx-auto border-2 border-red-800 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;

// const Container = ({ children, ...rest }) => {
//   return (
//     <Box px={{ sm: 4, md: 6 }} {...rest}>
//       {children}
//     </Box>
//   );
// };

// export default Container;
