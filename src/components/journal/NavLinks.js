import React from 'react' 

import { Flex, HStack, Text, Link, Divider, IconButton } from '@chakra-ui/react'
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
      wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]} 
      direction={{base: 'row', md: 'column'}}  
      mt={{base: '0', md: '3'}} 
      alignSelf={{base: 'center', md: 'auto'}} 
      justifyContent='space-around'  
      h={{base: 'auto', md: '270px'}}
    > 
     <NavLink to="/home">    
        <HStack {...flexProps} spacing={4}> 
          <IconButton
            display={{md: 'inline', base:'none'}} 
            colorScheme='#49081F'  
            icon={<BiHomeAlt />}
          />
          <Text pr={3} as="span">Home</Text>
        </HStack>  
     </NavLink>
    
     <NavLink to="/newEntry"> 
        <HStack {...flexProps} spacing={4}> 
            <IconButton
              display={{md: 'inline', base:'none'}}
              colorScheme='#49081F' 
              icon={<CgNotes />}
            /> 
            <Text pr={3} as="span">New entry</Text>
        </HStack>  
     </NavLink>

      <NavLink to="/home">  
        <HStack spacing={4}> 
            <IconButton
              display={{md: 'inline', base:'none'}}
              colorScheme='#49081F' 
              icon={<AiOutlineUser />}
            /> 
            <Text pr={3} as="span">Perfil</Text>
        </HStack> 
     </NavLink>
        

      <Divider display={{base: 'none', md: 'inherit'}} borderColor="whiteAlpha.400" /> 
      
      <Link {...flexProps} onClick={handleLogout} href='/auth/login'>  
        <HStack spacing={4}> 
            <IconButton
              display={{md: 'inline', base:'none'}}
              colorScheme='#49081F' 
              icon={<CgLogOut />}
            /> 
            <Text pr={3} as="span">Logout</Text>
        </HStack> 
      </Link>
    </Flex>
  )
}

