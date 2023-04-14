import React from "react";
import { Box, Stack, HStack, VStack } from "@chakra-ui/react";

function StackComp(props) {
  return (
    <VStack>
      <Box bg="red">Box 1</Box>
      <Box bg="green">Box 2</Box>
      <Box bg="blue">Box 3</Box>
    </VStack>
  );
}

export default StackComp;
