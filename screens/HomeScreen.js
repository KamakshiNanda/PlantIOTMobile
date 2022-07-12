import React, { Component} from 'react';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity } from 'react-native'

//import Button from 'react-native-button';
// import { FontAwesome } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons'; 
// import { launchCameraAsync,useCameraPermissions ,PermissionStatus,takeImageHandler} from 'expo-image-picker';


// Import Image Pi
import Camera from '../components/CameraButtonAndModal';
// import { render } from 'react-dom';




class HomeScreen extends Component {

render(){ 
  return (
    
    <View style={styles.container}>
    <View style={styles.rect2StackStack}>
      
        <Image
          source={require('../assets/pngwing.png')}
          resizeMode='cover'
          style={styles.rect2}
        ></Image>
        
        
          <View style={styles.rect4}>
            <Text style={styles.healYourCrop}>Heal Your Crop!</Text>
            <View style={styles.image3Row}>
              <Image
                source={require('../assets/cameralogo.jpg')}
                resizeMode='contain'
                style={styles.image3}
              ></Image>
              <Image
                source={require('../assets/next.png')}
                resizeMode='contain'
                style={styles.image6}
              ></Image>
              <Image
                source={require('../assets/diagnose.jpg')}
                resizeMode='contain'
                style={styles.image4}
              ></Image>
              <Image
                source={require('../assets/next.png')}
                resizeMode='contain'
                style={styles.image7}
              ></Image>
              <Image
                source={require('../assets/Heal.jpg')}
                resizeMode='contain'
                style={styles.image5}
              ></Image>
            </View>
            <Camera navigation={this.props.navigation} />
          </View>
          <View style={styles.rect6}>
            <Text style={styles.previousPictures}>Previous pictures</Text>
           
                <View style={styles.rect8Row}>
                  <View style={styles.rect8}></View>
                  <View style={styles.rect14}></View>
                  <View style={styles.rect9}></View>
                  <View style={styles.rect11}></View>
          </View>
          
        </View>
        
        <Image
          source={require('../assets/logoiot.png')}
          resizeMode='contain'
          style={styles.image10}
        ></Image>
      </View>
      
    </View>
 
      
      
      
  );
}

}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rect2: {
    
    
    height: 600,
    position: 'absolute',
    opacity:.7,
  },

  rect: {
    top: 90,
    width: 278,
    height: 513,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 35,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 4,
    left: 28
  },
  loremIpsum: {
    fontFamily: 'sans-serif',
    color: '#195F57',
    fontSize: 20,
    marginTop: 19,
    marginLeft: 24
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
  healYourCrop: {
    fontFamily: 'sans-serif',
    color: '#195F57',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 21
  },
  image3: {
    width: 80,
    height: 60,
    
    marginTop: 5
  },
  image6: {
    width: 20,
    height: 34,
    marginLeft: 10,
    marginTop: 14
  },
  image4: {
    width: 80,
    height: 60,
    marginLeft: 10,
    marginTop: 3
  },
  image7: {
    width: 20,
    height: 30,
    marginLeft: 2,
    marginTop: 14
  },
  image5: {
    width: 80,
    height: 60,
    marginLeft: 10
  },
  image3Row: {
    height: 53,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 20
  },
  rect6: {
    width: 320,
    height: 200,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 19,
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
  previousPictures: {
    fontFamily: 'sans-serif',
    color: '#195F57',
    fontSize: 14,
    marginTop: 9,
    marginLeft: 14
  },
  rect8Row: {
    height: 70,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 17,
    marginRight: 14
  },
  
  
  
  rect7: {
    width: 238,
    height: 126,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 17,
    marginLeft: 22,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  
 
  
  
 
  image2: {
    top: 492,
    left: 270,
    width: 131,
    height: 155,
    position: 'absolute'
  },
  rect8: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5
  },
  rect14: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    marginLeft: 21
  },
  rect9: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    marginLeft: 23
  },
  rect11: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    marginLeft: 23
  },
 
  image10: {
    top: 20,
    bottom: 20,
    left: 40,
    width: 120,
    height: 50,
    position: 'absolute'
  },
  rect2Stack: {
    top: 0,
    left: 57,
    width: 402,
    height: 647,
    position: 'absolute'
  },
  
  rect2StackStack: {
    width: 459,
    height: 692,
    marginLeft: -50
  }
});
