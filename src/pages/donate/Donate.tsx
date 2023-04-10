import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PrimaryColor } from "../../theme/GlobalStyles";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsCreditCard } from "react-icons/bs";

const Donate = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex display={{ base: "none", md: "flex" }} flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
      <Flex
        flexDir={"column"}
        p={{ sm: 1, lg: 8 }}
        flex={1}
        align={"center"}
        justify={"center"}
      >
        <Stack bg="white" p={8} spacing={4} w={"full"} maxW={"md"}>
          <Heading overflowY={"hidden"} fontSize={{ base: "2xl", lg: "3xl" }}>
            Make a Secure Donation
          </Heading>

          {/* <FormControl isRequired id="email">
            <FormLabel>Email address</FormLabel>
            <Input placeholder="Email" type="email" />
          </FormControl> */}

          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
              fontSize={{ base: 13, md: 15, lg: 16 }}
            ></Stack>
            <Button
              color={"white"}
              _hover={{ bgColor: "blue", color: "white" }}
              bgColor={PrimaryColor}
              variant={"solid"}
            >
              Donate $5 /month
            </Button>
            <Button
              color={"white"}
              _hover={{ bgColor: "blue", color: "white" }}
              bgColor={PrimaryColor}
              variant={"solid"}
            >
              Donate $10 /month
            </Button>
            <Button
              color={"white"}
              _hover={{ bgColor: "blue", color: "white" }}
              bgColor={PrimaryColor}
              variant={"solid"}
            >
              Donate $20 /month
            </Button>
            <Button
              color={"white"}
              _hover={{ bgColor: "blue", color: "white" }}
              bgColor={PrimaryColor}
              variant={"solid"}
            >
              Donate Custom Amount /month
            </Button>
            <Button
              color={"white"}
              _hover={{ bgColor: "blue", color: "white" }}
              bgColor={PrimaryColor}
              variant={"solid"}
            >
              Donate Custom Amount One Time
            </Button>
          </Stack>
          <Flex alignItems="center" my={4}>
            <Flex flex="1" h="1px" bg="gray.200" ml="4"></Flex>
          </Flex>

          {/* Add the donate with card option */}
          <Button
            // onClick={handleGoogleLogin}
            variant="outline"
            borderWidth="2px"
            borderColor="gray.200"
            display={"flex"}
            justifyContent="space-around"
            borderRadius={5}
          >
            <BsCreditCard style={{ color: PrimaryColor }} />
            {/* <Image
              w={25}
              h={25}
              src={
                "https://e7.pngegg.com/pngimages/415/124/png-clipart-mastercard-visa-bank-card-payment-mastercard-text-service.png"
              }
              alt=""
            /> */}
            Donate with Card
          </Button>
        </Stack>
        <Flex
          px={{ base: 6, lg: 1 }}
          justify={"space-around"}
          align="center"
          gap={3}
        >
          <Box
            fontSize={{ base: 12, md: 14, lg: 16 }}
            textDecoration="underline"
          >
            <Link to="/"> Frequently Asked Questions</Link>
          </Box>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Donate;
