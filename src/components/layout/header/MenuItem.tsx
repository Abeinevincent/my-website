import { Link, To } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { PrimaryColor } from "../../../theme/GlobalStyles";

type MenuItemProps = {
  children: React.ReactNode;
  active: boolean;
  isLast?: boolean;
  to: To;
};

export const MenuItem = ({
  children,
  active,
  isLast,
  to = "/",
  ...rest
}: MenuItemProps) => {
  return (
    <Link to={to}>
      <Text
        display="block"
        fontSize={"lg"}
        color={active ? "white" : PrimaryColor}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};
