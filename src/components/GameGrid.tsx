import useGames from "@/hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [];
  for (let i = 0; i < 20; i++) skeletons.push(i);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing="10px"
      >
        {isLoading && skeletons.map((_skeleton) => <GameCardSkeleton />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
