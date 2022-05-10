
import { Box, Container, Flex, Heading, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react' 

// import { SiginForm } from './auth/SignInForm';
import { SigupForm } from './auth/SigupForm';
 

function App() { 
  

  return (     
    <Box bg={{ md: mode('gray.100', 'inherit') }}>
      <Container maxW="lg" p={0}>
        <Flex
          flexDirection="column"
          h={{base: 'auto', md: '100vh'}}   
          justifyContent='center'  
        > 
          <Stack spacing="8">
            <Box spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading fontWeight='medium' fontSize={{ base: '24px', md: '30px' }} >
                Create an account
              </Heading>

              <Box mt={3}>
                <Text color='#4a5568' fontSize="md">Don't have an account? Sign up~</Text>
              </Box>
            </Box>
            <SigupForm />    
          </Stack>
        </Flex>
      </Container> 
    </Box>
  )
}

export default App;