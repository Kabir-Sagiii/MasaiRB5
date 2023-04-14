import React from "react";
import { Center, Input, VStack, Radio } from "@chakra-ui/react";

function InputComp(props) {
  return (
    <div>
      <Center mt="100px">
        <VStack>
          <Input variant="filled" size="lg" placeholder="lg" />
          <Input variant="flushed" size="sm" />
          <Input size="xs" />
          <Radio>Male</Radio>
          Male
        </VStack>
      </Center>
    </div>
  );
}

export default InputComp;
