import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import React,{useState,useEffect} from 'react';


const sensors ="https://realtime-rest-api.herokuapp.com/"
const IotScreen = () => {
  const [moist,setMoist]=useState([]);
  const [soiltemp,setSoilTemp]=useState([]);
  const [weathertemp, setWeatherTemp] = useState([]);
  const [weathercond, setWeatherCond] = useState([]);
  const [humidity, setHumidity] = useState([]);
  useEffect(()=>{
    fetch(sensors).then((response)=>response.json())
    .then((json)=>{setMoist(json.moisture);
      setSoilTemp(json.soilTemperature);
      setWeatherTemp(json.weatherTemperature);
      setWeatherCond(json.weatherCondition);
      setHumidity(json.weatherHumidity);

    })
    .catch((error)=>alert(error));
  })
  return (
      <ImageBackground
        source={require("../assets/pngwing.png")}
        style={styles.container}
      >
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Current Statistics</Text>
      </View>
      <View style={styles.inne}>
      <Text>Moisture: <Text style={{fontWeight: 'bold'}}>{moist}</Text></Text>
      <Text>Temperature of Soil: <Text style={{fontWeight: 'bold'}}>{soiltemp}</Text></Text>
      <Text>Weather Temperature: <Text style={{fontWeight: 'bold'}}>{weathertemp}</Text></Text>
      <Text>Weather Condition: <Text style={{fontWeight: 'bold'}}>{weathercond}</Text></Text>
      <Text>Humidity: <Text style={{fontWeight: 'bold'}}>{humidity}</Text></Text> 
      </View>  
      </ImageBackground>
 
  )
}

export default IotScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    marginTop:30
  },
  inne:{
    padding:8,
    marginTop:160,
    backgroundColor: 'white',
    opacity: 0.9,
    width: 300,
    alignItems: 'center'
  }
});