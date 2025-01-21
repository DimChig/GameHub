import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
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

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
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
