import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" bg="_coral">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="_blue" paddingX={"10px"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main" bg="_dodgerblue">
          <Box marginLeft={"10px"}>
            <GameHeading />
            <HStack spacing={3} marginBottom={3}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
