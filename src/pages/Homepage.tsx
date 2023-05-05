import { Grid, GridItem } from "@chakra-ui/react";
import ProductGrid from "../components/ProductGrid";

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
        <ProductGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
