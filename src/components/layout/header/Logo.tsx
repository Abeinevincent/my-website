import { Box, Image, Text } from "@chakra-ui/react";
import { PrimaryColor } from "../../../theme/GlobalStyles";

type LogoProps = {
  w: string;
  color: string[];
};

export const Logo = (props: LogoProps) => {
  return (
    <Box {...props}>
      <Text fontSize={"lg"} color={PrimaryColor} fontWeight="bold">
        {/* CodeWithVicent */}
        <Image
          src={"https://ticketug.com/TICKETUG4.png"}
          alt="logo"
          width={60}
        />
      </Text>
    </Box>
  );
};
