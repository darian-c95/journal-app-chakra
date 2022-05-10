import { HStack as Flex } from '@chakra-ui/react'
import React from 'react'

import { NoteScreen } from '../notes/NoteScreen'
// import { NothingSelected } from './NothingSelected'
import { Siderbar } from './Siderbar'

export const JournalScreen = () => {
  return (
    <Flex
      flexDirection={{
        base: 'column',
        md: 'row',
    }}
    >
        <Siderbar />

        <NoteScreen />
        {/* <main>
            {
                (active)
                    ? (<NoteScreen />)
                    : (<NothingSelected />)
            }
        </main> */}

    </Flex>
  )
}
