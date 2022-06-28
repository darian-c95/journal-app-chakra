import React, { useEffect } from 'react'
import { 
  Box, 
  Button, 
  HStack, 
  Icon, 
  Image, 
  Input, 
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalFooter, 
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure 
} from '@chakra-ui/react'
import moment from 'moment';

import { GoCalendar } from 'react-icons/go' 
import { RiDeleteBin5Line } from 'react-icons/ri' 
import { FiEdit } from 'react-icons/fi' 
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting, startSaveNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';  


export const JournalEntry = ({id, date, title, body, url}) => {

  const dispatch = useDispatch();
  const {active} = useSelector( state => state.notes );       
 
  const { isOpen, onOpen, onClose } = useDisclosure()

  const noteDate = moment(date); 
  
  const handleEntryClick = () => {
    dispatch(
      activeNote(id, {
        date, title, body, url
      })
    );
    
    onOpen();
  } 

  const [formValues, handleInputChange] = useForm({
    title: title,
    body: body, 
    url: url
  })  
  
  const noteUpdate = () => { 
    dispatch(startSaveNote(active));
    
    onClose();
  }

  useEffect(() => { 

    dispatch(activeNote(id, {...formValues}));

  }, [formValues, dispatch, id])

  const handleDelete = () => {
    dispatch(startDeleting(id));
  }
  

  return (
    <> 
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
          {
            url &&
              <Image  
                boxSize='100%'
                objectFit='cover'
                borderRadius='base'
                src= {url}
                alt="image"
              />
          }
        </Stack>
          
          <Box p={2}> 
            <Text as="h2" fontWeight="bold" fontSize="xl"> 
              {title}
            </Text> 

            <Box fontSize="sm">
              <Text noOfLines={[1, 2, 3]}>
                {body}
              </Text> 

              <HStack>
                <Icon as={FiEdit} color="gray.500" onClick={handleEntryClick} />
                <Text>Update</Text>  
                <Icon as={RiDeleteBin5Line} color="gray.500" onClick={handleDelete} />
                <Text>Delete</Text>  
              </HStack> 
            </Box> 

            <HStack fontSize="sm" mt={4}>
              <Icon as={GoCalendar} color="gray.500" />
              <Text>{noteDate.format('dddd')},</Text>
              <Text fontWeight='medium'>{noteDate.format('Do')}</Text>
            </HStack>
          </Box> 
        </Stack> 
      </Box> 

 
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader> 
        <Input name='title' value={active?.title} onChange={handleInputChange} />
      </ModalHeader> 
      <ModalBody>
        <Stack spacing={5}>
          <Image  
            boxSize='100%'
            objectFit='cover'
            borderRadius='base'
            src={active?.url}
            alt="image"
          />
          <Textarea name='body' value={active?.body} onChange={handleInputChange} mt={2}/>
        </Stack>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button onClick={noteUpdate} variant='ghost'>Save</Button>
      </ModalFooter>
    </ModalContent>
    </Modal>
  </> 
  )
}

