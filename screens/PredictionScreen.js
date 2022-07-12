import { StyleSheet, Text, View,Components ,Image} from 'react-native'
import React from 'react'

const PredictionScreen = ({Components}) => {
  return (
    <View style={styles.container}>
    <View style={styles.rect2StackStack}>
      
        <Image
          source={require('../assets/pngwing.png')}
          resizeMode='cover'
          style={styles.rect2}
        ></Image>
        <View style={styles.rect4}>
            <Text style={styles.healYourCrop}>Your Plant is - </Text>
            </View>
            <Image
          source={require('../assets/logoiot.png')}
          resizeMode='contain'
          style={styles.image10}
        ></Image>
        <View style={styles.rect6}>
            <Text style={styles.healYourCrop}>The siverity of this Diseases is- </Text>
            </View>
        </View>
        </View>
  )
}

export default PredictionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rect2: {
    
    
    height: 600,
    position: 'absolute',
    opacity:.7
  },
  rect4: {
    width: 320,
    height: 200,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 90,
    marginLeft: 70,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  rect6: {
    width: 320,
    height: 200,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 50,
    marginLeft: 70,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },

  healYourCrop: {
    fontFamily: 'sans-serif',
    color: '#195F57',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 21
  },
  rect2StackStack: {
    width: 459,
    height: 692,
    marginLeft: -50
  },
  image10: {
    top: 20,
    bottom: 20,
    left: 40,
    width: 120,
    height: 50,
    position: 'absolute'
  },
  

})