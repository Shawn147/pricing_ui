"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "../assets/CheckIcon";
export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px">
      <Icon as={CheckIcon} w={"22px"} h={"22px"} />
      <Text>{children}</Text>
    </HStack>
  );
};

export default function Home() {
  return (
    <Box>
      <Flex
        as={"section"}
        bg={"#6B46C1"}
        color={"#f7fafc"}
        align="center"
        justify="center"
        direction={"column"}
        pt={"90px"}
        px={"32px"}
        pb={"198px"}
      >
        <Heading fontWeight={"800"} fontSize={"48px"}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight={"500"} fontSize={"24px"} pt={"16px"}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Flex>
      <Flex>
        <Box
          p={"60px"}
          bg={"#f0eafb"}
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
        >
          <Text fontWeight={"800"} fontSize={"24px"}>
            Premium PRO
          </Text>
          <Heading fontWeight={"700"} fontSize={"60px"} mt={"16px"}>
            $329
          </Heading>
          <Text
            color={"#171923"}
            fontSize={"18px"}
            fontWeight={"500"}
            mt={"8px"}
          >
            billed just once
          </Text>
          <Button colorScheme={"purple"} size={"lg"} w={"282px"} mt={"24px"}>
            Get Started
          </Button>
        </Box>
        <Box>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack spacing={"20px"} pt={"24px"} as={"ul"}>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>International calling and messaging API</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
