import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) {
    let skeletons_count = 20;
    let skeletons = [];
    for (let i = 0; i < skeletons_count; i++) skeletons.push(i);

    return (
      <List>
        {skeletons.map((skeleton_id) => (
          <ListItem key={skeleton_id} paddingY={"5px"}>
            <HStack width="full">
              <Skeleton
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit="cover"
              ></Skeleton>
              <SkeletonText noOfLines={2} flex={1}></SkeletonText>
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3} marginTop={5}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
