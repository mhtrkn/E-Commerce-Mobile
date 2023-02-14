import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/home";
import Search from "../screens/Search/search";
import SplashScreen from "../../SplashScreen";
import { Feather } from "@expo/vector-icons";
import { Stack } from "expo-router";
import Modal from "../components/modal";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [ready, setReady] = useState(false);
  setTimeout(() => {
    setReady(true);
  }, 4000);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          display: !ready ? "none" : "flex",
          alignItems: "center",
          backgroundColor: "transparent",
          bottom: "5%",
          height: 50,
          justifyContent: "center",
          borderTopWidth: 0,
        },
      }}
    >
      {!ready && <Tab.Screen name="default" component={SplashScreen} />}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? null : <Feather name="search" size={24} color="white" />,
          tabBarItemStyle: {
            height: 50,
            maxWidth: 80,
            borderRadius: "50%",
            backgroundColor: "#2A0046",
          },
        }}
      />
      <Tab.Screen
        name="Modal"
        component={Modal}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused }) =>
            focused ? <Feather name="search" size={24} color="white" /> : null,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
