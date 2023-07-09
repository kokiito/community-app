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
        <Box mt={"30px"}>
          <Text>
            東京ボルダリングクラブとは都内近郊でボルダリングを一緒に登るために定期的に集うコミュニテイです。
          </Text>
        </Box>
        <Box mt={"20px"}>
          <Text>おしゃべりするために気軽に参加するもよし</Text>
          <Text>上達する仲間を探すもよし</Text>
          <Text>何かイベントを組んで参加者を募るのもよし</Text>
        </Box>
        <Box mt={"20px"}>
          <Text>各々にあったスタイルで参加できます。</Text>
        </Box>
      </Box>
    </Container>
  );
};
