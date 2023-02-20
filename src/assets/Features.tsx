import { Box, Flex, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { MoneyIcon } from "./MoneyIcon";
import { SetupIcon } from "./SetupIcon";
import { SubscriptionIcon } from "./SubscriptionIcon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} pt={"5"} px={"10"} spacing={"8"}>
      <Icon as={icon} boxSize={"12"} />
      <Text textAlign={"left"} fontSize="lg" fontWeight={"bold"}>
        {children}
      </Text>
    </HStack>
  );
}
export function Features() {
  return (
    <Flex maxW={"1024px"} m="auto" pt={"48px"} pb={"8"}>
      <HStack flexDirection={["column", "column", "row"]}>
        <Feature icon={MoneyIcon}>30 days moneyback guarantee</Feature>
        <Feature icon={SubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
        <Feature icon={SetupIcon}>No setup fees 100% hassle-free</Feature>
      </HStack>
    </Flex>
  );
}
