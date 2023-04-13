import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

function SimpleGridComp(props) {
  return (
    <SimpleGrid bg="black" w="500px" minChildWidth="200px">
      <Box bg="red" h="40">
        Box 1
      </Box>
      <Box bg="green" h="40">
        Box 2
      </Box>
      <Box bg="orange" h="40">
        Box 3
      </Box>
      <Box bg="blue" h="40">
        Box 4
      </Box>
    </SimpleGrid>
  );
}

export default SimpleGridComp;
