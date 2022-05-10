import {
    Box,
    Button,  
    FormControl,
    FormLabel,
    Icon,
    Input, 
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  
import { FcGoogle } from 'react-icons/fc' 
import * as React from 'react'

import { DividerWithText } from './DividerWithText'


export const SigupForm = () => {
  return ( 
        <Box
            bg={{ md: mode('white', 'gray.700') }}
            rounded={{ md: '2xl' }}
            p={{ base: '4', md: '12' }}
            borderWidth={{ md: '1px' }}
            borderColor={mode('gray.200', 'transparent')}
            shadow={{ md: 'lg' }}   
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault() 
                }}
            >
                <Stack spacing="4">
                <FormControl isRequired> 
                    <FormLabel mb={1}>Name</FormLabel>  
                    <Input placeholder="Enter your name" autoComplete="name" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel mb={1}>Email</FormLabel>
                    <Input placeholder="Enter your email" type="email" autoComplete="email" required />
                </FormControl>
                <FormControl isRequired> 
                    <FormLabel mb={1}>Password</FormLabel> 
                    <Input placeholder="***********" type="password" autoComplete="current-password" />
                    <Text mt={2} color='#4a5568' fontSize="sm">At least 8 characters long</Text>
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                    Create account
                </Button>
                
                <DividerWithText />

                <Button type="submit" size="lg" fontSize="md">
                    <Icon as={FcGoogle} boxSize="6" mr={3} />
                    Sign up with Google
                </Button>
                </Stack>
            </form> 
        </Box>     
  )
}
// fontFamily="InterVariable, -apple-system, system-ui, sans-serif"


