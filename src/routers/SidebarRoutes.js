import React from 'react' 
import { Route, Switch } from "react-router-dom"
import { Grid, SimpleGrid } from '@chakra-ui/react'

import { Siderbar } from '../components/journal/Siderbar'
import { NoteScreen } from '../components/notes/NoteScreen' 
import { JournalEntries } from '../components/notes/JournalEntries'
import { useSelector } from 'react-redux'
import { NothingSelected } from '../components/journal/NothingSelected'  


export const SidebarRoutes = () => {

  const {notes} = useSelector( state => state.notes );  

  return ( 
    <Grid
      bg='#F7FAFC'
      color='black'
      h={{md: '100vh', base: 'auto'}} 
      w='100vw' 
      templateRows={{md: '1fr', sm: '35vh 1fr', base: '45vh 1fr'}}  
      templateColumns= {{md: '320px 1fr', base: '1fr'}}  
    >
      <Siderbar rowSpan={1} colSpan={1} /> 

      <SimpleGrid gridArea={{base: '0', md: "1/2/2/3"}} mx={{base: '0', md: '4'}} my={{base: '4', md: '0'}} align-items='center' minChildWidth='400px' spacing='40px'>

      <Switch>  

        {
          (notes.length >= 1) 
            ? (<Route exact path="/home" component={ JournalEntries } />)
            : (<Route exact path="/home" component={ NothingSelected } />)
        } 

        <Route exact path="/newEntry" component={ NoteScreen } />   
      </Switch>  
                  
      </SimpleGrid>
    </Grid>  
  )
}
