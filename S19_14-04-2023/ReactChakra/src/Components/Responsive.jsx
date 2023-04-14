import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

function Responsive(props) {
  const widthValue = useBreakpointValue({
    sm: "30px",
    md: "100px",
    lg: "300px",
  });
  return (
    <div>
      <Box
        bg={["red", "black", "yellow", "green"]}
        fontSize={["30px", "70px", "120px"]}
        w={widthValue}
      >
        Box 1
      </Box>
    </div>
  );
}

export default Responsive;
