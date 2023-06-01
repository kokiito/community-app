import { Box, Flex, Center, Heading, Button, Image } from "@chakra-ui/react";
import React from "react";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../851H-kktt_004.ttf" });

export const Hero = () => {
  return (
    <Box w="100%" h="100vh" className={myFont.className}>
      <Image
        src={"/headerIcon.png"}
        position={"absolute"}
        top={"24px"}
        left={"32px"}
        width={"70px"}
        zIndex={"docked"}
      />
      <Flex justifyContent={"center"} height={"100%"}>
        <Center w="400px">
          <Box zIndex={"docked"}>
            <Box rounded="lg" bg={"white"} p={"16px"}>
              <Heading className={myFont.className} sx={{ fontWeight: "100" }}>
                しゃるうぃー
              </Heading>
              <Heading className={myFont.className} sx={{ fontWeight: "100" }}>
                クライミング
              </Heading>
            </Box>
            <Center mt={"32px"}>
              <Button
                as="a"
                href={"https://tunagate.com/circle/81865"}
                sx={{ fontWeight: "100" }}
              >
                つなげーとで募集中
              </Button>
            </Center>
          </Box>
        </Center>
        <Box
          flex="1"
          backgroundImage={"/borudaringukabe.jpg"}
          backgroundSize={"cover"}
          position={["absolute", "absolute", "initial"]}
          width={"100%"}
          height={"100vh"}
        ></Box>
      </Flex>
    </Box>
  );
};
