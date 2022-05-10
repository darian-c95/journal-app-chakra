import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'
import * as React from 'react' 


export const UserProfile = () => {
  return (
    <HStack spacing="4" px="2">
      <Avatar name='Darian Campos' src="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
      <Flex direction="column">
        <Text fontWeight="medium">'Darian Campos'</Text>
        <Text fontSize="sm" lineHeight="shorter">
        "dari@example.com"
        </Text>
      </Flex>
    </HStack>
  )
}