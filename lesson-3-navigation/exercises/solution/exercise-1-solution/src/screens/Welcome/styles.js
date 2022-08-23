import { StyleSheet } from 'react-native'

const stylesFn = () => {
   const bold = {
      fontWeight: '800'
   }
   const underline = {
      textDecorationLine: 'underline'
   }
   const whiteText = {
      color: 'white'
   }

   const styles = {
      alignRight: {
         alignItems: 'flex-end'
      },
      space: {
         marginBottom: 20,
         width: '100%'
      },
      bold: bold,
      underline: underline,
      h1: {
         fontSize: 35,
         alignSelf: 'center',
         ...underline
      },
      h2: {
         fontSize: 25,
         color: 'grey'
      },
      h3: {
         fontSize: 20,
         ...bold
      },
      warn: {
         borderRadius: 5,
         backgroundColor: 'yellow',
         padding: 15,
         margin: 30,
      },
      error: {
         borderRadius: 5,
         backgroundColor: 'red',
         padding: 15,
         margin: 30,
      },
      success: {
         borderRadius: 5,
         backgroundColor: 'green',
         padding: 15,
         margin: 30,
      },
      cta: {
         backgroundColor: 'blue',
         padding: '15pt 25pt',
         borderRadius: 5,
         width: 200,
         height: 50,
         margin: 10,
         alignItems: 'center',
         justifyContent: 'center'
      },
      whiteText: {
         color: 'white'
      }
   }

   return StyleSheet.create(styles);
}

export default stylesFn