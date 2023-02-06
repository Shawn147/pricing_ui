"use client";
import { Box, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box style={{ alignItems: "center" }}>
      <Box bgGradient="linear(to-l, #7928CA, #FF0080)" h={"50vh"}></Box>

      <Box w="100%" h={"50vh"} bgGradient="linear(to-t, green.200, pink.500)" />

      {/* <div
        style={{
          backgroundColor: "lightcoral",
          height: size.height * 0.5,
          width: size.width * 0.5,
          position: "absolute",
          zIndex: 111,
          top: size.height * 0.25,
          alignSelf: "center",
          verticalAlign: "center",
        }}
      ></div> */}
    </Box>
  );
}
