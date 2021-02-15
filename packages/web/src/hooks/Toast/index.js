import { useToast } from '@chakra-ui/react'

const ShowGameStatus = () => {
  const toast = useToast()
  const showLose = () => {
    toast({
      title: 'You Lose.',
      description: 'Sorry but you dont remember corretly =( .',
      status: 'error',
      duration: 9000,
      isClosable: true
    })
  }

  const showWinner = () => {
    toast({
      title: 'YOU WIN.',
      description: 'Excellent memory! You remember all numbers.',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }

  return { showLose, showWinner }
}

export default ShowGameStatus
