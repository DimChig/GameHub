import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px" paddingRight="20px" marginTop={"10px"}>
      <Link to={"/"}>
        <Image
          src={logo}
          boxSize="40px"
          objectFit={"cover"}
          minWidth={"40px"}
          borderRadius={10}
        ></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
