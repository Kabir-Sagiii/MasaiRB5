import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Center,
  useDisclosure,
} from "@chakra-ui/react";

function AlertDialogComp(props) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <div>
      <Center mt={20}>
        {" "}
        <Button bg="orange" onClick={onOpen}>
          Open Alert Dialog
        </Button>
      </Center>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Chakra UI</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              This is too interesting to get the knowledge on ChakraUI
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button bg="red" onClick={onClose}>
                Cancel
              </Button>
              <Button bg="blue">Confirm</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default AlertDialogComp;
