import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="_coral">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="_blue">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="_dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
