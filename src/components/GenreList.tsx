import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";

const GenreList = () => {
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
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
