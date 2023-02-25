import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { TertiaryColor } from "../../../theme/GlobalStyles";
import { BsEnvelope } from "react-icons/bs";

const Announcement = () => {
  return (
    <Flex bg={TertiaryColor} h={12} justifyContent="space-around">
      <Box display="flex" gap={2} alignItems="center" justifyContent={"center"}>
        <Icon color="white" as={BsEnvelope} />

        <Text textColor="white">Donate</Text>
      </Box>
    </Flex>
  );
};

export default Announcement;
