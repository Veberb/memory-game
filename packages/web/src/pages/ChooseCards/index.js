import React from 'react'
import { Flex, Box, Button, Stack, Text, HStack } from '@chakra-ui/react'

import { useHistory } from 'react-router-dom'
export const ChooseCards = () => {
  const history = useHistory()

  return (
    <Flex justify="center" alignItems="center">
      <Stack spacing={100} alignItems="center">
        <Text fontSize="4xl">
          Select the amout of cards that you want to play
        </Text>
        <HStack
          direction="row"
          display="flex"
          justifyContent="center"
          wrap="wrap"
          shouldWrapChildren={true}
        >
          {[4, 8, 12].map((ammount, index) => (
            <Box key={index}>
              <Button
                colorScheme="teal"
                mr="4"
                onClick={() => {
                  history.push(`/game`, { params: ammount })
                }}
              >
                {ammount} card's
              </Button>
            </Box>
          ))}
        </HStack>
      </Stack>
    </Flex>
  )
}
