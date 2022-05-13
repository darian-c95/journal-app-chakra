import React from 'react' 
import { Route, Switch } from "react-router-dom"
import { Grid, SimpleGrid } from '@chakra-ui/react'

import { Siderbar } from '../components/journal/Siderbar'
import { NoteScreen } from '../components/notes/NoteScreen' 
import { JournalEntries } from '../components/notes/JournalEntries'


export const SidebarRoutes = () => {

  return ( 
    <Grid
      bg='#F7FAFC'
      color='black'
      h={{base: 'auto', md: '100vh'}} 
      w='100vw'
      templateRows={{base: '100px 1fr', md: '1fr'}}  
      templateColumns= {{base: '1fr', md: '320px 1fr'}}  
    >
      <Siderbar rowSpan={1} colSpan={1} /> 

      <SimpleGrid gridArea={{base: '0', md: "1/2/2/3"}} mx={{base: '0', md: '4'}} my={{base: '4', md: '0'}} align-items='center' minChildWidth='400px' spacing='40px'>

      <Switch>
        <Route exact path="/home" component={ JournalEntries } /> 
        <Route exact path="/newEntry" component={ NoteScreen } />  
        <Route path="/" component={ JournalEntries } />
      </Switch>  
                  
      </SimpleGrid>
    </Grid>  
  )
}
