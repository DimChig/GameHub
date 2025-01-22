import useTrailers from "@/hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (error || !data) return null;

  if (isLoading) return <Spinner />;

  const trailer = data.results[0];
  if (!trailer) return null;

  return (
    <video
      title={trailer.name}
      src={trailer.data[480]}
      poster={trailer.preview}
      controls
    />
  );
};

export default GameTrailer;
