// src/screens/Layouts/styles.js

import { StyleSheet } from 'react-native'

const stylesFn = () => {
  return StyleSheet.create({
    container: {
       height: '100%', 
       justifyContent: 'space-between'
    },
    yellowSquare: {
        backgroundColor: 'yellow', 
        height: 200, 
        width: 200
    },
    blueSquare: { 
        alignSelf: 'center', 
        backgroundColor: 'blue', 
        height: 100, 
        width: 100
     },
     greenSquareContainer: {
        alignItems: 'flex-end'
     },
     greenSquare: {
        backgroundColor: 'green', 
        height: 150, 
        width: 150
     }
  });
}

export default stylesFn