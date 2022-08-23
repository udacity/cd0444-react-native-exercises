import { StyleSheet } from 'react-native'
import * as Colors from '../theme/colors'


// const styles = (fontSize) => {
//   return StyleSheet.create({
//     title: {
//       fontWeight: '800',
//       fontSize: 18
//     },
//     fontSize: fontSize
//   });
// }

// export default styles


const stylesFn = ({ size = 16, color }) => {
  console.log(size)

  const normalText = {
    fontSize: size,
    color: color || Colors.normalText,
  }

  const largerText = {
    fontSize: size * 1.2,
    color,
  }

  const styles = {
    userData: {
      ...largerText,
      height: '10%',
    },
    userDetails: {
      ...normalText,
      height: '90%',
    }
  }

  return StyleSheet.create(styles);
}

export default stylesFn