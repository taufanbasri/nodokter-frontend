import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

const ProductGrid = () => {
  const { data, error, hasNextPage, fetchNextPage } = useProducts();

  if (error) return <Text>{error.message}</Text>;

  const fetchedProductCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedProductCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
        endMessage={<Text p="10px">No more products!</Text>}
      >
        <SimpleGrid
          padding="10px"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page?.data.map((product) => (
                <ProductCardContainer key={product.id}>
                  <ProductCard product={product} />
                </ProductCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default ProductGrid;
