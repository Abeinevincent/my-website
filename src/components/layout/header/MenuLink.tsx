import { Box, Stack, Button } from "@chakra-ui/react";
import { FaDonate } from "react-icons/fa";
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
        <MenuItem bdr={"bdr"} active={active} to="/">
          Home
        </MenuItem>
        <MenuItem bdr={"bdr"} active={active} to="/about">
          Courses
        </MenuItem>
        <MenuItem bdr={"bdr"} active={active} to="/newsandupdates">
          Tutorials
        </MenuItem>
        <MenuItem bdr={"bdr"} active={active} to="/contact">
          Data Structures
        </MenuItem>
        <MenuItem bdr={"bdr"} active={active} to="/academia">
          Algorithms
        </MenuItem>
        <MenuItem bdr={"bdr"} active={active} to="/">
          Login
        </MenuItem>
        <MenuItem active={active} to="/">
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent={"space-around"}
          >
            <Button
              leftIcon={<FaDonate />}
              colorScheme={"yellow"}
              color="white"
              variant="solid"
              py={4.5}
              height={8}
              borderRadius={25}
            >
              Donate
            </Button>
          </Box>
        </MenuItem>
      </Stack>
    </Box>
  );
};
