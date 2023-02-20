"use client";
import { Features } from "@/assets/Features";
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
const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w={"22px"} h={"22px"} />
      <Text>{children}</Text>
    </HStack>
  );
};

export default function Home() {
  return (
    <Box>
      <Box as={"section"} pb={"28"}>
        <Flex
          color={"gray.50"}
          bg={"purple.600"}
          align="center"
          justify="center"
          direction={"column"}
          pt={"90px"}
          px={"8"}
          pb={"198px"}
        >
          <Heading fontWeight={"extrabold"} fontSize={["3xl", "3xl", "5xl"]}>
            Simple pricing for your business
          </Heading>
          <Text fontWeight={"medium"} fontSize={["lg", "lg", "2xl"]} pt={"4"}>
            Plans that are carefully crafted to suit your business.
          </Text>
        </Flex>
      </Box>
      <Box mx="6">
        <Flex
          maxW={"994px"}
          margin="auto"
          mt={"-256px"}
          mb={"10px"}
          borderRadius={"12px"}
          overflow={"hidden"}
          flexDirection={["column", "column", "row"]}
          boxShadow={
            "0px 10px 10px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)"
          }
        >
          <Box
            p={"60px"}
            bg={"#f0eafb"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text fontWeight={"extrabold"} fontSize={"2xl"}>
              Premium PRO
            </Text>
            <Heading
              as={"h3"}
              fontWeight={"bold"}
              fontSize={["5xl", "5xl", "6xl"]}
              mt={"4"}
            >
              $329
            </Heading>
            <Text
              color={"black"}
              fontSize={"lg"}
              fontWeight={"medium"}
              mt={"1"}
            >
              billed just once
            </Text>
            <Button colorScheme={"purple"} size={"lg"} w={"282px"} mt={"5"}>
              Get Started
            </Button>
          </Box>
          <Box p={"60px"} fontSize="18px" bg={"white"}>
            <Text textAlign={"left"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack spacing={"20px"} pt={"24px"} as={"ul"}>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
        <Features />
      </Box>
    </Box>
  );
}
