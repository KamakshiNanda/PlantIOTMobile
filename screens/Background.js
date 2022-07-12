import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Shapes} from "react-native-background-shapes";

const Background = () => {
  return (
    <View>
    <Shapes
    primaryColor="#416DF8"
    secondaryColor="#2F53D5"
    height={100}
    
    figures={[
      {name: 'circle', position: 'center', size: 60},
      {name: 'donut', position: 'flex-start', axis: 'top', size: 80},
      {name: 'circle', position: 'center', axis: 'right', size: 100},
    ]}
 />
    </View>
  )
}

export default Background

const styles = StyleSheet.create({
    flex:1,
})


