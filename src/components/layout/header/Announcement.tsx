import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { TertiaryColor } from "../../../theme/GlobalStyles";
import { BsEnvelope } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";

const Announcement = () => {
  return (
    <Flex bg={TertiaryColor} h={12} justifyContent="space-around">
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        flexWrap={"wrap-reverse"}
        justifyContent={"space-between"}
        // style={{ justifyContent: "space-between!important" }}
      >
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          justifyContent={"space-around"}
        >
          <Icon color="white" as={BsEnvelope} />
          <Text color={"white"}>codewithvincent@gmail.com</Text>
        </Box>
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          justifyContent={"space-around"}
        >
          <Icon color="white" as={FaDonate} />
          <Text textColor="white">Donate</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Announcement;
