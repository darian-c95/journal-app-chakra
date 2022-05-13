import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const DividerWithText = () => { 

  return (
    <Flex align="center" color="gray.300">
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Text as="span" px="3" color={useColorModeValue('gray.600', 'gray.400')} fontWeight="medium">
        or continue with
      </Text>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  )
}
