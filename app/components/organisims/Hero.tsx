import { Box, Flex, Center, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../images/logo.jpg";

export const Hero = () => {
  return (
    <Box w="100%" h="100vh" background={"#d4cfc3"}>
      <Flex justifyContent={"center"} height={"100%"}>
        <Center w="400px">
          <Box zIndex={"docked"}>
            <Image src={logo.src} />
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};
