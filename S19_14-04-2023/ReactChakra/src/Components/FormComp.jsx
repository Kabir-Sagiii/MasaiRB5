import React from "react";
import {
  Heading,
  Container,
  Center,
  Box,
  Input,
  Radio,
  RadioGroup,
  Textarea,
  Checkbox,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

function FormComp(props) {
  return (
    <Container mt="30px" boxShadow="dark-lg" p="4" rounded="md" bg="white">
      <Center>
        {" "}
        <Heading color="green">SignUp Form</Heading>
      </Center>

      <form>
        <Box mt="30px" mb="20px">
          <Input placeholder="Username" />
        </Box>
        <Box my="20px">
          <Input type="password" placeholder="Password" />
        </Box>
        <Box my="20px">
          <Input type="email" placeholder="Email Id" />
        </Box>
        <Box my="20px">
          <Center>
            <RadioGroup defaultValue="male">
              <Radio value="male" Checked>
                Male
              </Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </RadioGroup>
          </Center>
        </Box>
        <Box my="20px">
          <Textarea size="lg" placeholder="Enter Your Address"></Textarea>
        </Box>
        <Box my="20px">
          <SimpleGrid columns={2} w="300px" m="auto">
            <Checkbox colorScheme="orange" defaultChecked>
              HTML
            </Checkbox>
            <Checkbox colorScheme="blue" defaultChecked>
              CSS
            </Checkbox>
            <Checkbox colorScheme="yellow" defaultChecked>
              JS
            </Checkbox>
            <Checkbox colorScheme="green" defaultChecked>
              REACT
            </Checkbox>
          </SimpleGrid>
        </Box>
        <Box mt="30px" mb="10px">
          <Center>
            <Button colorScheme="green" variant="outline">
              Signup
            </Button>
          </Center>
        </Box>
      </form>
    </Container>
  );
}

export default FormComp;
