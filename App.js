import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Components/LoginPage";
import SignUp from "./Components/SignUpPage";
import Output from "./Components/HomeCompo";
import Addpoll from "./Components/AddPoll";
import Root from "./screens/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
// import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Root /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Register" component={SignUp} />
        <Stack.Screen name="User list" component={Output} />
        <Stack.Screen name="Create poll" component={Addpoll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
