import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Box, FormControl, FormLabel } from "@chakra-ui/react";

const JoinBox = () => {

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>
      <Button colorScheme="teal" width="full" mt="4">
        Login
      </Button>
    </Box>
  );
};

export default JoinBox;
