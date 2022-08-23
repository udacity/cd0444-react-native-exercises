import { useNavigation } from '@react-navigation/native'

export const useGoBack = (number) => {
  const { navigate } = useNavigation()
  if(number === 1) {
    return () => navigate('Third')
  }
  if(number === 2) {
    return () => navigate('First')
  }
  if(number === 3) {
    return () => navigate('Second')
  }
}

export const useGoForward = (number) => {
  const { navigate } = useNavigation()
  if(number === 1) {
    return () => navigate('Second')
  }
  if(number === 2) {
    return () => navigate('Third')
  }
  if(number === 3) {
    return () => navigate('First')
  }
}
