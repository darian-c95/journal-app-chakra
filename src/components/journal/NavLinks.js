import React from 'react' 

import { Flex, HStack, Icon, Text, Link, Divider } from '@chakra-ui/react'
import { BiHomeAlt } from 'react-icons/bi'
import { CgNotes } from 'react-icons/cg'
import { AiOutlineUser } from 'react-icons/ai' 
import { CgLogOut } from 'react-icons/cg'  
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth'

import { NavLink } from 'react-router-dom' 



export const NavLinks = (props) => {

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout())
  }

  const { ...flexProps } = props

  

  
  return (
    <Flex 
      direction={{base: 'row', md: 'column'}}  
      mt={{base: '0', md: '3'}} 
      alignSelf={{base: 'center', md: 'auto'}} 
      justifyContent='space-around'  
      h={{base: 'auto', md: '270px'}} 
    > 
     <NavLink to="/home">   
      {/* <Link  href="/home"> */}
        <HStack {...flexProps} spacing={4}>
          <Icon as={ BiHomeAlt } boxSize="6" mr={3} /> 
          <Text as="span">Home</Text>
        </HStack> 
      {/* </Link>  */}

     </NavLink>
    
     <NavLink to="/newEntry">
      {/* <Link  href="/newEntry">   */}
        <HStack {...flexProps} spacing={4}>
            <Icon as={ CgNotes } boxSize="6" mr={3} /> 
            <Text as="span">New entry</Text>
        </HStack> 
      {/* </Link>  */}
     </NavLink>

      <Link {...flexProps} href='/home'>
        <HStack spacing={4}>
            <Icon as={ AiOutlineUser } boxSize="6" mr={3} /> 
            <Text as="span">Perfil</Text>
        </HStack> 
      </Link> 

      <Divider display={{base: 'none', md: 'inherit'}} borderColor="whiteAlpha.400" /> 
      
      <Link {...flexProps} onClick={handleLogout} href='/auth/login'>  
        <HStack spacing={4}>
            <Icon as={ CgLogOut } boxSize="6" mr={3} /> 
            <Text as="span">Logout</Text>
        </HStack> 
      </Link>
    </Flex>
  )
}

