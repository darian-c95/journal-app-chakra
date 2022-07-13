import { Box, Divider, Flex, Heading, Spacer } from '@chakra-ui/react'
import * as React from 'react' 

import { NavLinks } from './NavLinks' 
import { UserProfile } from './UserProfile'


export const Siderbar = () => {
 
  
  return (
    <Flex     
        h={{md: '100vh', sm: '35vh', base: '47vh'}}     
        direction= 'column'
        bg="#49081F"
        color="white"
        px={6}
        py={8}
        position={{base: 'inherit', md: 'fixed'}}
        width={{base: 'auto', md: '320px'}}
        alignItems={{md: 'inherit', sm: 'center', base: 'center'}} 
    >
        <Box mb={8}> 
        <Heading>Journal App</Heading>
        </Box>
        
        <Divider display={{base: 'none', md: 'inherit'}} borderColor="whiteAlpha.400" /> 
        
        <NavLinks 
          label="People" 
          // isActive 
          display="block"
          py={2}
          px={3}
          borderRadius="md"
          transition="all 0.3s"
          fontWeight="medium"
          lineHeight="1.5rem" 
          color="whiteAlpha.900"
          _hover={{
            bg: 'pink.900',
            color: 'white',
          }}
          _activeLink={{
            bg: 'teal.600',
            color: 'white',
          }} 
        />   
        
        <Spacer display={{base: '5px', md: 'inherit'}} /> 

        <UserProfile />
    </Flex>
  )
}
