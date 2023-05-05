import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="main">
        <SimpleGrid
          padding="10px"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          Main
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default Homepage;
