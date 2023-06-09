import {
  Box,
  Text,
  Center,
  Heading,
  Button,
  Image,
  Container,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import lineQr from "../../images/group_invite_QR_code.jpg";
import { Icon } from "@chakra-ui/react";
import { FaLine } from "react-icons/fa";

export const AddLine = () => {
  return (
    <Container
      maxW="container.sm"
      my={"40px"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={"70vh"}
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
        <Center px={{ base: "10px", md: "90px" }} mt={"15px"}>
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
            alt="LINE QR CODE"
            display={{ base: "none", sm: "none", md: "flex" }}
          />
          <Button
            bgColor={"#06c755"}
            color={"white"}
            display={{ md: "none" }}
            borderRadius={"20px"}
            minH={"50px"}
            minW={"300px"}
          >
            <NextLink
              href={
                "https://line.me/ti/g2/ZDwRJy4DtzgKc4LP-4ejzfpIkdbohi1Tt1qAIA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
              }
              passHref
            >
              <Center>
                <Icon as={FaLine} w={8} h={8} mr={"15px"} />
                <Text fontSize={"20px"} mt={"4px"}>
                  {"友達に追加"}
                </Text>
              </Center>
            </NextLink>
          </Button>
        </Center>
      </Box>
    </Container>
  );
};
