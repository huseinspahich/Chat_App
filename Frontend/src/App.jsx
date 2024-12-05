import React from 'react'
import {Box, ChakraProvider} from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Box w="100vw" px={5} >
        <ChatBox />
      </Box>
    </ChakraProvider>
  )
}

export default App
