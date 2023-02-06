"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex align="center" justify="center" direction={"column"}>
      <Box
        w={"100%"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        h={"50vh"}
      ></Box>
      {/* <Text fontSize={32}>HEllo</Text> */}
      <Box
        w="50%"
        h={"50vh"}
        position="absolute"
        bgGradient="linear(to-t, green.200, pink.500)"
      />
    </Flex>
  );
}
