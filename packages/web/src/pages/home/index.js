import React from 'react'
import { Flex, Box, Button, Stack, Text } from '@chakra-ui/react'

export const Home = () => {
  return (
    <Flex justify="center" alignItems="center">
      <Stack spacing={100} alignItems="center">
        <Text fontSize="4xl">Welcome to my Memory Game</Text>

        <Box>
          <Button colorScheme="teal" mr="4">
            Let's Play
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}
