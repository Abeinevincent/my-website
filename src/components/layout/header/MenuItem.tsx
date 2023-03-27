import { Link, To } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { PrimaryColor, PrimaryYellowColor } from "../../../theme/GlobalStyles";

type MenuItemProps = {
  children: React.ReactNode;
  active: boolean;
  isLast?: boolean;
  to: To;
  bdr?: any;
};

export const MenuItem = ({
  children,
  active,
  isLast,
  to = "/",
  bdr,
  ...rest
}: MenuItemProps) => {
  return (
    <Link to={to}>
      <Text
        borderBottom={bdr ? "3px solid transparent" : "none"}
        transition={"1.5s all linear"}
        _hover={{
          borderBottom: bdr ? `3px solid ${PrimaryYellowColor}` : "none",
        }}
        display="block"
        fontSize={"md"}
        fontWeight={500}
        color={"#000"}
        // color={active ? "white" : PrimaryColor}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};
