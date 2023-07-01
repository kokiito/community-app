import { Box, Text, Center, Heading, Container } from "@chakra-ui/react";
import React from "react";

export const AboutUs = () => {
  return (
    <Container
      maxW="container.sm"
      my={"40px"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxWidth={"600px"}
    >
      <Box>
        <Center>
          <Heading as={"h1"}>About Us</Heading>
        </Center>
        <Text></Text>
      </Box>
    </Container>
  );
};
