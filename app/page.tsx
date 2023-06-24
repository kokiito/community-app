"use client";
import { Hero } from "./components/Hero";
import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";
import lineQr from "./images/group_invite_QR_code.jpg";

// TODO: not Foundの場合の処理を追加する
export default async function Home() {
  return (
    <Box>
      <Hero />
      <Container
        maxW="container.sm"
        my={"40px"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={"100vh"}
        maxWidth={"600px"}
      >
        <Box
          py={"50px"}
          px={"10px"}
          background={"#81a0cd"}
          borderRadius={"lg"}
          min-width={"600px"}
        >
          <Center>
            <Heading>公式LINEアカウント</Heading>
          </Center>
          <Center px={"90px"} mt={"15px"}>
            <Box>
              <Text>
                東京都内で平日夜などボルダリングジムで活動しています。メンバー募集中です！出入り自由。気軽に参加してみください！
              </Text>
            </Box>
          </Center>
          <Center mt={"35px"}>
            <Image
              borderRadius="md"
              boxSize="150px"
              src={lineQr.src}
              alt="Dan Abramov"
            />
          </Center>
        </Box>
      </Container>
    </Box>
  );
}
