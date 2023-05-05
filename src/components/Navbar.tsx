import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between" w="full">
      <Image src={logo} width={40} objectFit="cover" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
