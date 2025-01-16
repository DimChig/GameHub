import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" paddingRight="20px" marginY={"10px"}>
      <Image src={logo} boxSize="40px" borderRadius={10}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
