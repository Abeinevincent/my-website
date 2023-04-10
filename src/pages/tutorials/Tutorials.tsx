import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { tutorialsData } from "../../api/fakeApi";
import UnderConstruction from "../../assets/images/underconst.png";
import Tutorial from "../../components/layout/tutorial/Tutorial";
import { PrimaryColor } from "../../theme/GlobalStyles";

const Tutorials = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={"column"}
      justifyContent="center"
    >
      <Box>
        <Text textAlign={"center"} fontSize={30} fontWeight={500}>
          Tutorials from CodeWithVicent Youtube Channel
        </Text>
        <Text textAlign={"center"} color={PrimaryColor}>
          All tutorials are backed up by a real world project
        </Text>
      </Box>
      <Box>
        {/* {tutorialsData.map((tutorial, index) => (
          <Tutorial
            key={index}
            title={tutorial.title}
            description={tutorial.description}
            videoSrc={tutorial.videoSrc}
          />
        ))} */}
      </Box>
    </Box>
  );
};

export default Tutorials;
