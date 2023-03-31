import { Flex, Box, Heading, Code, Text } from "@chakra-ui/react";
import Hero from "../../components/layout/hero/Hero";

export const Home = () => {
  return (
    <Flex flexDirection={"column"}>
      <Hero />
      <Box p={{base: 5, md: 10, lg: 20}}>
        <Text>
          Testing content dolor sit amet consectetur adipisicing elit. Excepturi
          deleniti id neque veritatis et maiores, voluptas laborum, placeat sint
          mollitia accusantium commodi, accusamus non ducimus saepe dolore vitae
          quasi fugit.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          deleniti id neque veritatis et maiores, voluptas laborum, placeat sint
          mollitia accusantium commodi, accusamus non ducimus saepe dolore vitae
          quasi fugit.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          deleniti id neque veritatis et maiores, voluptas laborum, placeat sint
          mollitia accusantium commodi, accusamus non ducimus saepe dolore vitae
          quasi fugit.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          deleniti id neque veritatis et maiores, voluptas laborum, placeat sint
          mollitia accusantium commodi, accusamus non ducimus saepe dolore vitae
          quasi fugit.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          deleniti id neque veritatis et maiores, voluptas laborum, placeat sint
          mollitia accusantium commodi, accusamus non ducimus saepe dolore vitae
          quasi fugit.
        </Text>
      </Box>
    </Flex>
  );
};
