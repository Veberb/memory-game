import React from 'react'
import { Flex, Box, Button, Stack, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

export const Game = () => {
  const history = useHistory()

  return (
    <Flex justify="center" alignItems="center">
      <Stack spacing={100} alignItems="center">
        <Text fontSize="4xl">LÇucas</Text>
        {[4, 8, 12].map((ammount, index) => (
          <Box key={index}>
            <Button
              colorScheme="teal"
              mr="4"
              onClick={() => {
                history.push(`/game/${ammount}`)
              }}
            >
              {ammount} card's
            </Button>
          </Box>
        ))}
      </Stack>
    </Flex>
  )
}
