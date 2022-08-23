import { StyleSheet } from 'react-native'

const stylesFn = ({fontSize = 12}) => {
  const warnColor = {
    color: yellow
  }
  return StyleSheet.create({
    title: {
      fontWeight: '800',
      fontSize: 18
    },
    warnTitle: {
      fontWeight: '800',
      fontSize: 18,
      ...warnColor
    },
    fontSize: {
      fontSize
    }
  });
}

export default stylesFn












// import { StyleSheet } from 'react-native'

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


// const stylesFn = ({ size = 16, color }) => {
//   console.log(size)

//   const normalText = {
//     fontSize: size,
//     color: color || Colors.normalText,
//   }

//   const largerText = {
//     fontSize: size * 1.2,
//     color,
//   }

//   const styles = {
//     userData: {
//       ...largerText,
//       height: '10%',
//     },
//     userDetails: {
//       ...normalText,
//       height: '90%',
//     }
//   }

//   return StyleSheet.create(styles);
// }

// export default stylesFn