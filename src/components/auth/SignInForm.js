import {
    Box,
    Button,  
    FormControl,
    FormLabel,
    Icon,
    Input, 
    Stack, 
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  
import { FcGoogle } from 'react-icons/fc' 
import * as React from 'react'

import { DividerWithText } from './DividerWithText'


export const SiginForm = () => {
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
                <FormControl id="email">
                    <FormLabel mb={1}>Email</FormLabel>
                    <Input placeholder="Enter your email" type="email" autoComplete="email" required />
                </FormControl>
                <FormControl> 
                    <FormLabel mb={1}>Password</FormLabel> 
                    <Input placeholder="***********" type="password" autoComplete="current-password" /> 
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                    Sign in
                </Button>
                
                <DividerWithText />

                <Button type="submit" size="lg" fontSize="md">
                    <Icon as={FcGoogle} boxSize="6" mr={3} />
                    Sign in with Google
                </Button>
                </Stack>
            </form> 
        </Box>     
  )
} 


// fontFamily="InterVariable, -apple-system, system-ui, sans-serif"


