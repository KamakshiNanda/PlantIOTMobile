import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import InitialScreen from "../screens/InitialScreen";
import PredictionScreen from "../screens/PredictionScreen";
import IotScreen from "../screens/IotScreen";
import CameraScreen from "../screens/CameraScreen";
import PickImageFromGallery from "../screens/PickFromGalleryScreen";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={InitialScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Crop"
        component={HomeScreen}
        options={{
          tabBarLabel: "Crop",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="leaf-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Heal"
        component={PredictionScreen}
        options={{
          tabBarLabel: "Heal",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Iot"
        component={IotScreen}
        options={{
          tabBarLabel: "Iot",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="PickImageFromGallery"
        component={PickImageFromGallery}
        options={{
          tabBarLabel: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="image-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
