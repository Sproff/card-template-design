import React from 'react';
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

function Login() {
  return (
    <Box
      height="100%"
      bg="#fafafa"
      w="100%"
      py="5rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="#fafafa"
        boxShadow="1px 2px 1px 2px #ddd"
        w="40%"
        px="2rem"
        py="4rem"
        borderRadius="1rem"
        color="tomato"
      >
        <Text fontWeight="700" fontSize="1rem" textAlign="center">
          LOGIN
        </Text>

        <FormControl id="email" py="1rem">
          <Box py="2rem">
            <Box>
              <FormLabel color="tomato">Email address</FormLabel>
              <Input
                type="email"
                py=".4rem"
                borderRadius=".2rem"
                border="2px solid #f1f1f1"
                w="100%"
                outline="none"
                fontSize=".8rem"
              />
            </Box>
            <FormHelperText fontSize=".6rem" color="tomato" pt="1rem">
              We'll never share your email.*
            </FormHelperText>

            <Box>
              <FormLabel color="tomato">Password</FormLabel>
              <Input
                type="password"
                py=".4rem"
                borderRadius=".2rem"
                border="2px solid #f1f1f1"
                w="100%"
                outline="none"
                fontSize=".8rem"
              />
            </Box>
          </Box>
          <Text fontSize=".8rem" textAlign="center">
            Not registered?
            <a href="/signup"> Signup</a>
          </Text>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Login;
