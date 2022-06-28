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
    useColorModeValue as mode, 
    FormErrorMessage
  } from '@chakra-ui/react'
  
import { FcGoogle } from 'react-icons/fc' 
import * as React from 'react' 
import validator from 'validator';
import { useDispatch } from 'react-redux';

import { DividerWithText } from './DividerWithText'
import { useForm } from '../../hooks/useForm'
import { starRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {
    
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: 'Bullion',
        email: 'bullion@gmail.com',
        password: '76543210',
        password2: '76543210',
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        dispatch(starRegisterWithEmailPasswordName(email, password, name)) 
    }

     
    const isError = name === ''


    const isEmailValid = () => {
        if(!validator.isEmail(email)) {  
          return false;
        }  
    
        return true;
    }

    const isPasswordValid = () => {
        if(password !== password2 || password.length < 5) {  
            return false;
        } 

        return true;
    }

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
            <form onSubmit={handleRegister}>
                <Stack spacing="4">
                    <FormControl isInvalid={isError}> 
                        <FormLabel mb={1}>Name</FormLabel>  
                        <Input 
                            placeholder="Enter your name" 
                            name='name'
                            type="text" 
                            value={name} 
                            onChange={handleInputChange} 
                            autoComplete="name" 
                        />
                        {isError && <FormErrorMessage>Name is required.</FormErrorMessage>}
                    </FormControl>

                    <FormControl isInvalid={!isEmailValid()}>
                        <FormLabel mb={1}>Email</FormLabel>
                        <Input 
                            name='email'
                            type="email" 
                            value={email} 
                            onChange={handleInputChange} 
                            placeholder="Enter your email"  
                            autoComplete="email"  
                        />
                        {!isEmailValid() && <FormErrorMessage>Email is not valid.</FormErrorMessage>}
                    </FormControl>

                    <FormControl> 
                        <FormLabel mb={1}>Password</FormLabel> 
                        <Input 
                            name= 'password' 
                            type="password" 
                            value={password} 
                            onChange={handleInputChange} 
                            placeholder="***********"   
                            autoComplete="current-password" 
                        />
                        <Text mt={2} color='#4a5568' fontSize="sm">At least 8 characters long</Text>
                    </FormControl>

                    <FormControl isInvalid={!isPasswordValid()}> 
                        <FormLabel mb={1}>Password Confirm</FormLabel> 
                        <Input 
                            name= 'password2' 
                            type="password" 
                            value={password2} 
                            onChange={handleInputChange} 
                            placeholder="***********"  
                            autoComplete="current-password" 
                        />
                        {!isPasswordValid() && <FormErrorMessage>Password should be at least 6 characters and match each other.</FormErrorMessage>}
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


