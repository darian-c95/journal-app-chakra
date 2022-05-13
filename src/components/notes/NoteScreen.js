import {
  Box,  
  Button, 
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
        <Flex 
            h='100vh'
            w='auto'
            justifyContent='center'
            alignItems='center'
        >
            
            <Box
                bg='white'  
                w='xl'
                rounded={{ md: 'xl' }}
                p={{ base: '4', md: '16' }}
                shadow={{ md: 'lg' }} 
            >
                <Heading as='h3' size='lg' fontWeight='medium'>Write a new note</Heading>
                <Stack spacing={6}> 

                    <FormControl id="title" mt={6}>
                        <FormLabel>Title</FormLabel>
                        <Input borderColor='gray.200' placeholder='Your title' type="text" maxLength={255} />
                    </FormControl>

                    <FormControl id="comment">
                        <FormLabel>Comment</FormLabel>
                        <Textarea borderColor='gray.200' placeholder='Your comment' resize='none' />
                    </FormControl> 
                    
                    <FormControl id="picture">
                        <FormLabel>Picture</FormLabel>
                        <Stack p='5' borderWidth='1px' borderColor='gray.200' rounded='md' color='gray.400'  textAlign='center'>
                            <IconButton bg='gray.200' color='black' alignSelf='center' icon={<FiUploadCloud />}></IconButton>
                            <Link color='blue.600'>Click to upload</Link>
                            <Text>PNG, JPG or GIF up to 2MB</Text>
                        </Stack>
                    </FormControl>

                    <FormControl id="button" alignSelf="star">
                        <Button size='lg' colorScheme='blue'>Submit review</Button>
                    </FormControl>
                </Stack>
            </Box>
        </Flex> 
    )
}  