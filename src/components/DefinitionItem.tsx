import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const SectionElement = ({ term: heading, children }: Props) => {
  return (
    <Box>
      <Text fontWeight={"bold"} color={"gray.600"} as="dt">
        {heading}
      </Text>
      <dd>{children}</dd>
    </Box>
  );
};

export default SectionElement;
