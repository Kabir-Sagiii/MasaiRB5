import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

function GridCom(props) {
  return (
    <Grid
      bg="orange"
      h="400px"
      templateColumns="repeat(3,1fr)"
      templateRows="100px 200px 100px 50px"
    >
      <GridItem colSpan={2} rowSpan={3} bg="tomato">
        Item 1
      </GridItem>
      <GridItem bg="black">Item 2</GridItem>
      <GridItem bg="red" rowSpan={2}>
        Item 3
      </GridItem>
      <GridItem bg="green">Item 4</GridItem>
      <GridItem bg="yellow">Item 5</GridItem>
      <GridItem bg="blue">Item 6</GridItem>
    </Grid>
  );
}

export default GridCom;
