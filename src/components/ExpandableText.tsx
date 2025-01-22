import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children: text, maxLength = 300 }: Props) => {
  if (!text) return null;
  if (text.length <= maxLength) return <Text>{text}</Text>;

  const [isExpanded, setExpanded] = useState(false);

  return (
    <Box>
      <Text>
        {isExpanded ? text : text.substring(0, maxLength).trim() + "..."}

        <Button
          marginLeft={1}
          fontWeight={"bold"}
          colorScheme="yellow"
          size="xs"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      </Text>
    </Box>
  );
};

export default ExpandableText;
