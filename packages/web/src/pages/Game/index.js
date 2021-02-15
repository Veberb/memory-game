import React, { useEffect, useState } from 'react'
import {
  Flex,
  Button,
  Box,
  HStack,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react'
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
  const [loading, setLoading] = useState(false)

  const getRandomNumbers = async () => {
    setLoading(true)
    const { data } = await api.get(GET_RANDOM_NUMBERS(length))
    setCards([...data])
    setCardsSorted([...data].sort((a, b) => a - b))
    setLoading(false)
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
      return
    }

    if (!gameIsEnded && choosedCards.length === cardsSorted.length) {
      setGameIsEnded(true)
      showWinner()
    }
  }
  const restartGame = () => {
    getRandomNumbers()
    setStartGame(false)
    setGameIsEnded(false)
    setChoosedCards([])
  }
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
          You have to memorize cards in ascending order of the numbers.
        </Text>

        <HStack
          direction="row"
          display="flex"
          justifyContent="center"
          wrap="wrap"
          shouldWrapChildren={true}
        >
          <Button
            colorScheme="teal"
            mr="4"
            onClick={() => history.push('/choose')}
          >
            Choose ammount of card's
          </Button>
          {!startGame && !gameIsEnded && (
            <Button
              colorScheme="teal"
              mr="4"
              onClick={() => setStartGame(!startGame)}
            >
              Start game
            </Button>
          )}
          {(gameIsEnded || startGame) && (
            <Button colorScheme="teal" mr="4" onClick={() => restartGame()}>
              Restart Game
            </Button>
          )}
          {startGame && (
            <Button
              colorScheme="teal"
              mr="4"
              onClick={() => setStartGame(!startGame)}
            >
              Reveal
            </Button>
          )}
        </HStack>

        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {!loading && (
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
        )}
      </Stack>
    </Flex>
  )
}
