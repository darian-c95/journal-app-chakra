import { Avatar, Flex, Stack, VStack, Text } from '@chakra-ui/react'
import * as React from 'react' 
import { useSelector } from 'react-redux';


export const UserProfile = () => {

  const {name, email} = useSelector( state => state.auth );  

  return (
    <Flex py={6} direction={{base: 'column', md: 'row'}} align="center">
      <Avatar name='Darian Campos' src="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
      <VStack px={4} align={{base: 'center', md: 'start'}}>
        <Text fontWeight="medium">{name}</Text>
        <Text fontSize="sm" lineHeight="shorter">
        {email}
        </Text>
      </VStack>
    </Flex>
  )
}