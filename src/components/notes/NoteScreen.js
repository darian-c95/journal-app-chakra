import {
  Box,  
  Button,
  Container, 
  Flex, 
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Textarea,  
  IconButton
} from '@chakra-ui/react'

import { FiUploadCloud } from 'react-icons/fi'
import React from 'react'

export const NoteScreen = () => {
return ( 
  <Container
      maxW='4xl'
      h='100vh'
      p={0}
      bg='#858585'
  >
      <Flex 
          h='100vh'
          justifyContent='center'
          alignItems='center'
      >
          <Box
              bg='white'
              h='auto'
              w='578px'
              borderRadius='xl'
              p={16}
          >
              <Heading as='h3' size='lg' fontWeight='medium'>Write a new note</Heading>
              <Stack spacing={6}> 

                  <FormControl id="title" mt={6}>
                      <FormLabel>Title</FormLabel>
                      <Input placeholder='Your title' type="text" maxLength={255} />
                  </FormControl>

                  <FormControl id="comment">
                      <FormLabel>Comment</FormLabel>
                      <Textarea placeholder='Your comment' resize='none' />
                  </FormControl> 
                  
                  <FormControl id="picture"   >
                      <FormLabel>Picture</FormLabel>
                      <Stack p='5' borderWidth='1px' rounded='md' color='gray.400' textAlign='center'>
                          <IconButton color='black' alignSelf='center' icon={<FiUploadCloud />}></IconButton>
                          <Link color='blue.600'>Click to upload</Link>
                          <Text>PNG, JPG or GIF up to 2MB</Text>
                      </Stack>
                  </FormControl>

                  <FormControl id="button"  alignSelf="star">
                      <Button size='lg' colorScheme='blue'>Submit review</Button>
                  </FormControl>
              </Stack>
          </Box>

      </Flex>
  </Container>
)
} 