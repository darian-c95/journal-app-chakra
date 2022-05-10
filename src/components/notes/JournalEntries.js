import React from 'react' 
import { Grid, SimpleGrid } from '@chakra-ui/react' 
import { JournalEntry } from './JournalEntry' 
import { Siderbar } from '../journal/Siderbar'


export const JournalEntries = () => {
  return (
    <Grid
      h={{base: 'auto', md: '100vh'}} 
      w='100vw'
      templateRows={{base: '100px 1fr', md: '1fr'}}  
      templateColumns= {{base: '1fr', md: '320px 1fr'}}  
    >
      <Siderbar rowSpan={1} colSpan={1} />
      <SimpleGrid gridArea={{base: '0', md: "1/2/2/3"}} mx={{base: '0', md: '4'}} my={{base: '4', md: '0'}} align-items='center' minChildWidth='400px' spacing='40px'>
        <JournalEntry />   
        <JournalEntry />   
        <JournalEntry />   
      </SimpleGrid>
    </Grid>
  )
} 
