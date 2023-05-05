import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Product from "../entities/Product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md">{product.name.toUpperCase()}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{product.description.substring(0, 50)}...</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="blue" disabled={true}>
            Rp. {product.price}
          </Button>
          <Button variant="solid" colorScheme="blue">
            Buy Product
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
