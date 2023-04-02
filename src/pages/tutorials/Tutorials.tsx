import { Box, Image } from "@chakra-ui/react";
import UnderConstruction from "../../assets/images/underconst.png";

const Tutorials = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Image w="40%" h="40%" src={UnderConstruction} alt="" />
    </Box>
  );
};

export default Tutorials;
