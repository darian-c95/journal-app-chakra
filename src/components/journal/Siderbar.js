import { Box, Divider, Flex, Heading, Spacer } from '@chakra-ui/react'
import * as React from 'react'

import { NavLinks } from './NavLinks' 
import { UserProfile } from './UserProfile'


export const Siderbar = () => {
  
  return (
    <Flex
        h={{base: 'auto', md: '100vh'}}       
        direction={{base: 'row', md: 'column'}}
        bg="#49081F"
        color="white"
        px={6}
        py={8}
        position={{base: 'inherit', md: 'fixed'}}
        width={{base: 'auto', md: '320px'}}
    >
        <Box mb={8} display={{base: 'none', md: 'inherit'}}> 
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
          // aria-current={isActive ? 'page' : undefined}
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
        
        <Spacer /> 

        <UserProfile />
    </Flex>
  )
}
