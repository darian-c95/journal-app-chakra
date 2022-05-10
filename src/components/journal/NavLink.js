import { Flex, HStack, Icon, Link, Text } from '@chakra-ui/react'
import { BiHomeAlt } from 'react-icons/bi'
import { CgNotes } from 'react-icons/cg'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBookmarksFill } from 'react-icons/bs'

import React from 'react'

export const NavLink = (props) => {

  const { ...flexProps } = props

  return (
    <Flex 
      direction={{base: 'row', md: 'column'}}  
      mt={{base: '0', md: '3'}} 
      alignSelf={{base: 'center', md: 'auto'}} 
      justifyContent='space-around'  
      h={{base: 'auto', md: '270px'}} 
    > 
      <Link {...flexProps}>
        <HStack spacing={4}>
          <Icon as={ BiHomeAlt } boxSize="6" mr={3} /> 
          <Text as="span">Home</Text>
        </HStack> 
      </Link>

      <Link {...flexProps}>  
        <HStack spacing={4}>
            <Icon as={ CgNotes } boxSize="6" mr={3} /> 
            <Text as="span">New entry</Text>
        </HStack> 
      </Link> 

      <Link {...flexProps}>  
        <HStack spacing={4}>
            <Icon as={ AiOutlineUser } boxSize="6" mr={3} /> 
            <Text as="span">Perfil</Text>
        </HStack> 
      </Link>

      <Link {...flexProps}>  
        <HStack spacing={4}>
            <Icon as={ BsBookmarksFill } boxSize="6" mr={3} />
            {/* <Icon boxSize="20px" /> */}
            <Text as="span">Favorites</Text>
        </HStack> 
      </Link>
    </Flex>
  )
}
