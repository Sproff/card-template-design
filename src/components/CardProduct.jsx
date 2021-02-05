import React, {useState, useEffect} from 'react';
import {Container, Box, Text, Image, Badge} from '@chakra-ui/react';
import axios from 'axios';

import pr5 from '../assets/images/pr5.jpg';

function CardProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const APP_URL =
      'https://cors-anywhere.herokuapp.com/https://ecommerce-product-api.herokuapp.com/';

    axios
      .get(APP_URL)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container bg="#fafafa" height="100%">
      <Text
        display="flex"
        bg="tomato"
        color="#fafafa"
        textTransform="uppercase"
        fontSize="1.5rem"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        py="1rem"
      >
        Card Template Design
      </Text>

      {products.map((product, index) => (
        <Box
          width="300px"
          height="100%"
          maxW="100%"
          border=".1px solid #f0f0f0"
          margin="2rem"
          borderRadius="10px"
          overflow="hidden"
          justifyContent="center"
          backgroundColor="#fafafa"
          boxShadow="2px 2px #ddd"
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
            <Text fontSize=".8rem" fontWeight="light" p="1rem 0" opacity="0.8">
              {product.desc}
            </Text>
          </Box>

          <Box margin="0 1rem">
            <hr margin="0 1rem" />
            <Text fontSize="1rem" p="1rem 0" color="tomato" fontWeight="bold">
              ${product.price}
            </Text>
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default CardProduct;
