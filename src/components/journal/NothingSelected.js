import { Flex, Text } from '@chakra-ui/react'

export const NothingSelected = () => {
  return (
    <Flex
      bg='#F7FAFC'
      h='100vh'
      justifyContent='center'
	    alignItems='center'
    >
      <Text fontSize='4xl'>Click on the button "New entry" to begin</Text>
    </Flex>
  )
}
