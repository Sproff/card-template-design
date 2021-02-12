import React, {useState, useEffect} from 'react';
import {
  Container,
  Box,
  Text,
  Image,
  Badge,
  Spinner,
  HStack,
} from '@chakra-ui/react';
import axios from 'axios';

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const APP_URL = 'https://ecommerce-product-api.herokuapp.com/';

    axios
      .get(APP_URL)
      .then((res) => {
        setProducts(res.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loader) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        // emptyColor="gray.200"
        // color="blue.500"
        borderColor="tomato"
        size="xl"
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        // height="100vh"
      />
    );
  }

  return (
    <Container bg="#fafafa" height="100%">
      <Text
        bg="tomato"
        color="#fafafa"
        textTransform="uppercase"
        fontSize="1.5rem"
        fontWeight="bold"
        textAlign="center"
        py="1rem"
      >
        Card Template Design
      </Text>

      <HStack m="2rem 3rem" flexWrap="wrap" justifyContent="space-between">
        {products.map((product) => (
          <Box
            key={product._id}
            width="300px"
            height="100%"
            maxW="100%"
            border=".1px solid #f0f0f0"
            // margin="3rem 0"
            borderRadius="10px"
            overflow="hidden"
            backgroundColor="#fafafa"
            boxShadow="1px 2px 1px 2px #ddd"
          >
            <Image
              src={product.image}
              height="200px"
              width="100%"
              alt="card image"
            />
            <Box>
              <Badge
                borderRadius="5px"
                fontSize=".7rem"
                padding=".2rem .4rem"
                backgroundColor="tomato"
                color="#fff"
                margin=".5rem 1rem"
              >
                {product.category}
              </Badge>
            </Box>
            <Box margin="0 1rem">
              <Text fontSize="1rem" fontWeight="bold">
                {product.name}
              </Text>
              <Text
                fontSize=".8rem"
                fontWeight="lighter"
                p="1rem 0"
                opacity="0.8"
              >
                {product.desc}
              </Text>
            </Box>

            <Box margin="0 1rem">
              <hr margin="0 1rem" />
              <HStack justifyContent="space-between">
                <Text
                  fontSize=".8rem"
                  p="1rem 0"
                  color="tomato"
                  fontWeight="bold"
                  opacity="0.6"
                  textDecoration="line-through"
                >
                  ${product.price}
                </Text>
                <Text
                  fontSize="1rem"
                  p="1rem 0"
                  color="tomato"
                  fontWeight="bold"
                >
                  ${product.saleprice}
                </Text>
              </HStack>
            </Box>
          </Box>
        ))}
      </HStack>
    </Container>
  );
}

export default ProductCard;
