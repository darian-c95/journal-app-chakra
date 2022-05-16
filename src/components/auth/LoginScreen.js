import {
    Heading,
    Text,
    Link,
    Flex,
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
import {useDispatch} from 'react-redux'

import { DividerWithText } from './DividerWithText'
import { useForm } from '../../hooks/useForm' 
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'


export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'bullion@gmail.com',
        password: '654321'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

  return (
    <Flex 
        bg='#F7FAFC'
        h='100vh'   
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
    >
        <Heading mb={3} fontWeight='semibold'>Log in to your account</Heading>
        <Text mb={8}>Don't have an account? <Link color='blue.600' href='/auth/register'>Sign up</Link></Text>

        <Box
            bg={{ md: mode('white', 'gray.700') }}
            w='md'
            rounded={{ md: 'xl' }}
            p={{ base: '4', md: '10' }}
            borderWidth={{ md: '1px' }}
            borderColor={mode('gray.200', 'transparent')}
            shadow={{ md: 'lg' }}   
        >
            <form onSubmit={handleLogin}>
                <Stack spacing="4"> 
                    <FormControl id="email">
                        <FormLabel mb={1}>Email</FormLabel>
                        <Input 
                            placeholder="Enter your email"
                            name='email'
                            type="email" 
                            value={email} 
                            onChange={handleInputChange} 
                            autoComplete="email" 
                            required 
                        />
                    </FormControl>

                    <FormControl> 
                        <FormLabel mb={1}>Password</FormLabel> 
                        <Input 
                            placeholder="***********"
                            name= 'password' 
                            type="password" 
                            value={password} 
                            onChange={handleInputChange} 
                            autoComplete="current-password" 
                        /> 
                    </FormControl>

                    <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                        Sign in
                    </Button>
                    
                    <DividerWithText />

                    <Button onClick={handleGoogleLogin} type="submit" size="lg" fontSize="md">
                        <Icon as={FcGoogle} boxSize="6" mr={3} />
                        Sign in with Google
                    </Button>
                </Stack>
            </form> 
        </Box>
    </Flex>
  )
} 
 


