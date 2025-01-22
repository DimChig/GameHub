import useScrenshots from "@/hooks/useScreenshots";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameSlug: string;
}

const GameScreenshots = ({ gameSlug }: Props) => {
  const { data, isLoading, error } = useScrenshots(gameSlug);

  if (isLoading) return <Spinner />;
  if (error || !data) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
      {data.results.map((screenshot) => (
        <Box padding={3}>
          <img key={screenshot.id} src={screenshot.image} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
