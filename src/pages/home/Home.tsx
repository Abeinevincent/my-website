import {
  Flex,
  Box,
  Heading,
  Code,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HomeInfo } from "../../api/fakeApi";
import Hero from "../../components/layout/hero/Hero";
import HomeComponent from "../../components/uicomponents/homecomponent/HomeComponent";
import { PrimaryColor } from "../../theme/GlobalStyles";

export const Home = () => {
  const isLargeDevice = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <Flex flexDirection={"column"}>
      <Hero />
      <Box>
        <Flex
          p={{ base: 5, md: 10, lg: 20 }}
          //   my={5}
          bg="white"
          alignItems={"center"}
          justifyContent="center"
          flexDir={"column"}
        >
          <Box w={{base: "100%", md: "80%", lg: "60%"}}>
            <Text
              textAlign={"center"}
              color={PrimaryColor}
              fontWeight={"bold"}
              mb={3}
            >
              Hi There
            </Text>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={30} mb={5}>
              I am Vicent Abeinemukama.
            </Text>
            <Box>
              <Text textAlign={"center"}>
                A fullstack web and mobile engineer by passion and with
                experience and expertise to help you master
                {isLargeDevice && <br />}
                atleast a skill in web and/or mobile development. Whether youre
                a complete beginner, a mid level
                {isLargeDevice && <br />} software developer, or an experienced
                or seniour software engineer, CodeWithVicent is for you.{" "}
                {isLargeDevice && <br />} Be sure you will master atleast a
                skill and it will help you at your job or ace{" "}
                {isLargeDevice && <br />} your first job. I am thrilled teaching
                you how to code.
              </Text>
            </Box>
            <Flex flexDir={{base: "column", lg: "row"}} gap={5} align={"center"} justify="center" mt={7}>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  5+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Years of Experience
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  250+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Developed Applications
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  1000+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Youtube Audience
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  20
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Top Notch Courses
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box>
          {HomeInfo.map((item: any) => (
            <HomeComponent item={item} />
          ))}
        </Box>
      </Box>
    </Flex>
  );
};
