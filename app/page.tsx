"use client";
import { Hero } from "./components/Hero";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { AddLineContainer } from "./components/AddLINEContainer";

// TODO: not Foundの場合の処理を追加する
export default async function Home() {
  return (
    <Box>
      <Hero />
      <AddLineContainer />
    </Box>
  );
}
