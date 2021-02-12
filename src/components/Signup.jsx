import React from 'react';
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

function Signup() {
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
          SIGN UP
        </Text>

        <FormControl id="email" py="1rem">
          <Box py="2rem">
            <Box>
              <FormLabel color="tomato">Full Name</FormLabel>
              <Input
                type="fullname"
                py=".4rem"
                borderRadius=".2rem"
                border="2px solid #f1f1f1"
                w="100%"
                outline="none"
                fontSize=".8rem"
              />
            </Box>

            <Box py="1rem">
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
              <FormHelperText fontSize=".6rem" color="tomato" py=".5rem">
                We'll never share your email.*
              </FormHelperText>
            </Box>

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

            <Box pt="1rem">
              <FormLabel color="tomato">Confirm Password</FormLabel>
              <Input
                type="confirmPassword"
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
            Already registered?
            <a href="/login"> Login</a>
          </Text>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Signup;
