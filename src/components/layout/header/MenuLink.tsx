import { Box, Stack, Button } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export const MenuLinks = ({
  isOpen,
  active,
}: {
  isOpen: boolean;
  active: boolean;
}) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem active={active} to="/">
          Home
        </MenuItem>
        <MenuItem active={active} to="/about">
          About
        </MenuItem>
        <MenuItem active={active} to="/newsandupdates">
          News & Updates
        </MenuItem>
        <MenuItem active={active} to="/contact">
          Contact{" "}
        </MenuItem>
        <MenuItem active={active} to="/academia">
          Academia{" "}
        </MenuItem>
        <MenuItem active={active} to="/">
          Register
        </MenuItem>
        <MenuItem active={active} to="/" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};
