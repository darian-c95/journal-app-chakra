import { Box, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { GoCalendar } from 'react-icons/go'


export const JournalEntry = () => {
  return ( 
    <Box alignSelf='center'>
        <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={{
          base: '3',
          md: '10',
        }}
        align="flex-start" 
        rounded={{
          md: 'xl',
        }}
        shadow={{
          md: 'base',
        }}
      >
        <Stack>
          <Image  
            boxSize='100%'
            objectFit='cover'
            borderRadius='base'
            src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="image"
          />
        </Stack>

        <Box p={2}> 
          <Text as="h2" fontWeight="bold" fontSize="xl">
            Melinda Paul
          </Text> 

          <Box fontSize="sm" noOfLines={2}>
            Hi, I am a professional Graphic Designer and Web Developer. I am a member of Evolving
            team [login to view URL] and I have experience of 5+ years even before joining this.
          </Box> 

          <HStack fontSize="sm" mt={4}>
            <Icon as={GoCalendar} color="gray.500" />
            <Text>July, 2021</Text>
          </HStack>
        </Box>
      </Stack>
    </Box> 
  )
}
