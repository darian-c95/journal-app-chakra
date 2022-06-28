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
import React, { useState } from 'react'
import { startUploading } from '../../actions/notes'; 
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'; 


export const NoteScreen = () => {

    const dispatch = useDispatch(); 

    const [disbledValue, setDisbledValue] = useState(true)
    const [valueFile, setValueFile] = useState(true)
    
    
    const [formValues, handleInputChange, reset] = useForm({
        title: '',
        body: '', 
    }) 
    
    const {title, body} = formValues; 
    
    
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click(); 
    }
    
    const handleFileChange = async(e) => {  

        const valueFile = e.target.files[0];
        
        if(valueFile) { 
            setDisbledValue(false); 
            setValueFile(valueFile); 
        }
    }
    
    const handleAddNew = () => { 

        dispatch(startUploading(valueFile, title, body));

        reset();
    }

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
                        <Input
                            name='title'
                            value={title}
                            onChange={handleInputChange}
                            borderColor='gray.200' 
                            placeholder='Your title' 
                            type="text" 
                            maxLength={255} 
                        />
                    </FormControl>

                    <FormControl id="comment">
                        <FormLabel>Body</FormLabel>
                        <Textarea
                            name='body'
                            value={body}
                            onChange={handleInputChange} 
                            borderColor='gray.200' 
                            placeholder='Your body' 
                            resize='none' 
                        />
                    </FormControl> 
                    
                    <FormControl id="picture">
                        <FormLabel>Picture</FormLabel>
                        <Stack p='5' borderWidth='1px' borderColor='gray.200' rounded='md' color='gray.400'  textAlign='center'>
                            <IconButton bg='gray.200' color='black' alignSelf='center' icon={<FiUploadCloud />}></IconButton>
                            <Link onClick={handlePictureClick} color='blue.600'>Click to upload</Link>

                            <Input 
                                id='fileSelector' 
                                display='none' 
                                type='file' 
                                onChange={handleFileChange}
                            />

                            <Text>PNG, JPG or GIF up to 2MB</Text>
                        </Stack>
                    </FormControl>

                    <FormControl id="button" type="submit" alignSelf="star">
                        <Button disabled={disbledValue} onClick={handleAddNew} size='lg' colorScheme='blue'>Save</Button>
                    </FormControl>
                </Stack>
            </Box>
        </Flex> 
    )
}  