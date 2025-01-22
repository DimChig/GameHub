import { Game } from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import SectionElement from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={4} marginTop={8} as="dl">
      <SectionElement term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </SectionElement>
      <SectionElement term="Metascore">
        <CriticScore score={game.metacritic} />
      </SectionElement>
      <SectionElement term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </SectionElement>
      <SectionElement term="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </SectionElement>
    </SimpleGrid>
  );
};

export default GameAttributes;
