import React from "react";
import { Container, Box } from "@chakra-ui/react";

function ContainerComp(props) {
  return (
    <Container bg="orange" maxW="5xl" centerContent mt={10} p={10}>
      <Box bg="red">Box 1</Box>
      <Box bg="green">Box 2</Box>
      <Box bg="yellow">Box 3</Box>
    </Container>
  );
}

export default ContainerComp;
