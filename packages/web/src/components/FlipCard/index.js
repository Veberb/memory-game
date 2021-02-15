import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Box, Text, Image } from '@chakra-ui/react'
import lepaya from '../../assets/lepaya.png'

export const FlipCard = ({ gameIsEnded, flipped = true, value }) => {
  const [isFlipped, setIsFlipped] = useState(flipped)

  useEffect(() => {
    setIsFlipped(flipped)
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
          isFlipped && !gameIsEnded && setIsFlipped(!isFlipped)
        }}
      >
        <Image boxSize="200px" src={lepaya} />
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
          isFlipped && !gameIsEnded && setIsFlipped(!isFlipped)
        }}
      >
        <Text fontSize="5xl">{value}</Text>
      </Box>
    </ReactCardFlip>
  )
}
