import {
    Box,
    Button,    
    FormControl,
    FormLabel,
    Icon,
    Input, 
    Stack,
    Text,
    Flex,
    Heading,
    Link,
    useColorModeValue as mode
  } from '@chakra-ui/react'
  
import { FcGoogle } from 'react-icons/fc' 
import * as React from 'react'

import { DividerWithText } from './DividerWithText'


export const RegisterScreen = () => {
  return (  
    <Flex 
        bg='#F7FAFC'
        h='100vh'   
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
    >
        <Heading mb={3} fontWeight='semibold'>Create an account</Heading>
        <Text mb={8}>Already have an account? <Link color='blue.600' href='/auth/login'>Log in</Link></Text>
        
        <Box
            w='md'
            bg={{ md: mode('white', 'gray.700') }}
            rounded={{ md: 'xl' }}
            p={{ base: '4', md: '10' }}
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
    </Flex> 
  )
} 


