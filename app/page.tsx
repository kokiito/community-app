"use client";
import { Hero } from "./components/organisims/Hero";
import { AboutUs } from "./components/organisims/AboutUs";
import { Box } from "@chakra-ui/react";
import { AddLine } from "./components/organisims/AddLine";

// TODO: not Foundの場合の処理を追加する
export default async function Home() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <AddLine />
    </Box>
  );
}
