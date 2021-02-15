import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Flex, Box, Button, Stack, Text, Image } from '@chakra-ui/react'
import logo from '../../assets/logo.svg'
import thinking from '../../assets/thinking.jpg'
export const FlipCard = ({ gameIsEnded, flipped = true, value }) => {
  const [isFlipped, setIsFlipped] = useState(flipped)

  useEffect(() => {
    console.log(gameIsEnded)
    if (!gameIsEnded) setIsFlipped(flipped)
  }, [flipped])

  return (
    <ReactCardFlip isFlipped={!isFlipped} flipDirection="vertical">
      <Box
        as="button"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        onClick={() => {
          setIsFlipped(!isFlipped)
        }}
      >
        <Image boxSize="200px" src={thinking} />
      </Box>
      <Box
        as="button"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="black"
        overflow="hidden"
        boxSize="200px"
        onClick={() => {
          setIsFlipped(!isFlipped)
        }}
      >
        <Text fontSize="5xl">{value}</Text>
      </Box>
    </ReactCardFlip>
  )
}
