import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px" paddingRight="20px" marginTop={"10px"}>
      <Image src={logo} boxSize="40px" borderRadius={10}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
