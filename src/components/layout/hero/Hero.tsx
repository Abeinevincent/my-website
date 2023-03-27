import { Flex, Box, Heading, Code, Text, Button } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PrimaryYellowColor } from "../../../theme/GlobalStyles";

const Hero = () => {
  return (
    <Box>
      <Box
        w="100vw"
        h={570}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        bg='linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("https://i.pinimg.com/originals/51/bc/09/51bc0996c7a74ff83b9b2dfc24a45b7f.jpg") center'
        backgroundSize={"cover"}
        className="headerSection"
        p={3}
      >
        <Box>
          <Text
            fontSize={24}
            color="white"
            mb={4}
            style={{
              textAlign: "center",
            }}
          >
            Welcome to
          </Text>
          <Heading
            overflowY={"hidden"}
            color="white"
            fontSize={55}
            mb={4}
            style={{ textAlign: "center" }}
          >
            <span style={{ color: PrimaryYellowColor }}>CODE</span> WITH{" "}
            <span style={{ color: PrimaryYellowColor }}>VICENT</span>
          </Heading>
          <Text
            fontSize={22}
            color="white"
            style={{
              textAlign: "center",
              // textTransform: "uppercase",
              marginTop: "10px",
            }}
          >
            I am Vicent Abeinemukama, a fullstack web and mobile engineer
            <br /> by passion and with experience and expertise to help you
            <br /> master atleast a skill in web and mobile development
          </Text>
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent={"space-around"}
          >
            <Button
              rightIcon={<FaArrowRight />}
              // colorScheme={""}
              backgroundColor="transparent"
              border={`1px solid ${PrimaryYellowColor}`}
              color="white"
              variant="solid"
              mt={5}
              overflowY={"hidden"}
              p={5}
              height={8}
              borderRadius={5}
              _hover={{ backgroundColor: "orange", color: "white" }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
