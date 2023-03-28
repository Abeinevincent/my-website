import { Box } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";
import Announcement from "../header/Announcement";
import NavBar from "../header/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Announcement />
      <NavBar />
      <Box marginTop={{ base: 0, lg: 10 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
