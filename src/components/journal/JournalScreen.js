// import { HStack as Flex, Grid, SimpleGrid } from '@chakra-ui/react'
// import React from 'react'

// // import { NothingSelected } from './NothingSelected'
// import { Siderbar } from './Siderbar'
// import { NoteScreen } from '../notes/NoteScreen'
// import { JournalEntry } from '../notes/JournalEntry'

// export const JournalScreen = () => {
//   return (
//     // <Flex
//     //   flexDirection={{
//     //     base: 'column',
//     //     md: 'row',
//     //   }}
//     // >
//     <Grid 
//       bg='#F7FAFC'
//       h={{base: 'auto', md: '100vh'}} 
//       w='100vw'
//       templateRows={{base: '100px 1fr', md: '1fr'}}  
//       templateColumns= {{base: '1fr', md: '320px 1fr'}}  
//     >
//       <Siderbar rowSpan={1} colSpan={1} />
//       <SimpleGrid gridArea={{base: '0', md: "1/2/2/3"}} mx={{base: '0', md: '4'}} my={{base: '4', md: '0'}} align-items='center' minChildWidth='400px' spacing='40px'>
     
//         {/* <NoteScreen />  */}
//         <JournalEntry />  
//       </SimpleGrid>


//     </Grid>
        /* <main>
            {
                (active)
                    ? (<NoteScreen />)
                    : (<NothingSelected />)
            }
        </main> */

    // </Flex>
//   )
// }


// import React from 'react'
// import { Route, Switch } from "react-router-dom"
// import { JournalEntry } from '../notes/JournalEntry'
// import { NoteScreen } from '../notes/NoteScreen'

// export const JournalScreen = () => {
//   return (
//     <>
//       <Switch>
//             <Route 
//                 exact
//                 path="/home"
//                 component={ JournalEntry }
//             /> 

//             <Route 
//                 exact
//                 path="/newEntry"
//                 component={ NoteScreen }
//             />  

//             <Route path="/" component={ JournalEntry } />
//         </Switch>  
//     </>
//   )
// }
