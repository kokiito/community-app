import { Box, Flex, Center, Heading, Button, Image } from "@chakra-ui/react";
import React from "react";
import localFont from "next/font/local";
import logo from "../images/logo.jpg";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../851H-kktt_004.ttf" });

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
