import React, { useEffect, useState } from 'react'
import { Flex, Button, Box, HStack, Stack, Text } from '@chakra-ui/react'
import { useHistory, useLocation } from 'react-router-dom'

import { GET_RANDOM_NUMBERS, api } from '../../axios'
import { FlipCard } from '../../components'
import ShowGameStatus from '../../hooks/Toast'

export const Game = () => {
  const history = useHistory()
  const location = useLocation()
  const { showLose, showWinner } = ShowGameStatus()
  const length = location.state.params

  const [cards, setCards] = useState([])
  const [cardsSorted, setCardsSorted] = useState([])
  const [choosedCards, setChoosedCards] = useState([])
  const [startGame, setStartGame] = useState(false)

  const [gameIsEnded, setGameIsEnded] = useState(false)

  const getRandomNumbers = async () => {
    const { data } = await api.get(GET_RANDOM_NUMBERS(length))
    setCards([...data])
    setCardsSorted([...data].sort((a, b) => a - b))
  }

  const chooseCards = (event, ammount) => {
    setChoosedCards([...choosedCards, ammount])
  }

  const checkIfIsCorrectOrder = () => {
    if (!startGame) return
    const samePosition = choosedCards.length - 1
    const isInOrder = choosedCards[samePosition] === cardsSorted[samePosition]
    if (!isInOrder) {
      showLose()
      setGameIsEnded(true)
    }

    if (!gameIsEnded && choosedCards.length === cardsSorted.length) {
      setGameIsEnded(true)
      showWinner()
    }
  }
  console.log('lucas', gameIsEnded)
  useEffect(() => {
    getRandomNumbers()
  }, [])

  useEffect(() => {
    checkIfIsCorrectOrder()
  }, [choosedCards])

  return (
    <Flex justify="center" alignItems="center">
      <Stack spacing={100} alignItems="center">
        <Text fontSize="4xl">
          You have to memorize cards in ascending order of the numbers{' '}
        </Text>
        {/* Funcao para pegar novos numeros */}
        <Button
          colorScheme="teal"
          mr="4"
          onClick={() => setStartGame(!startGame)}
        >
          {!startGame ? 'Start game' : 'Restart Game'}
        </Button>
        <Button
          colorScheme="teal"
          mr="4"
          onClick={() => setStartGame(!startGame)}
        >
          Reveal
        </Button>
        <HStack
          direction="row"
          display="flex"
          justifyContent="center"
          wrap="wrap"
          shouldWrapChildren={true}
        >
          {cards.map((ammount, index) => (
            <Box
              key={index}
              margin={'20px 20px 20px 20px'}
              onClick={evt => {
                chooseCards(evt, ammount)
              }}
            >
              <FlipCard
                gameIsEnded={gameIsEnded}
                flipped={startGame}
                value={ammount}
              />
            </Box>
          ))}
        </HStack>
      </Stack>
    </Flex>
  )
}
