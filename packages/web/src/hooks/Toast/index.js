import { useToast } from '@chakra-ui/react'

const ShowGameStatus = () => {
  const toast = useToast()
  const showLose = () => {
    toast({
      title: 'You Lose.',
      description: 'Sorry but you didnt remember corretly =( .',
      status: 'error',
      duration: 4000,
      isClosable: true
    })
  }

  const showWinner = () => {
    toast({
      title: 'YOU WIN.',
      description: 'Excellent memory! You remember all numbers.',
      status: 'success',
      duration: 4000,
      isClosable: true
    })
  }

  return { showLose, showWinner }
}

export default ShowGameStatus
