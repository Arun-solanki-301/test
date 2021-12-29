import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Components/LoginPage";
import SignUp from "./Components/SignUpPage";
import Output from "./Components/HomeCompo";
import Addpoll from "./Components/AddPoll";
import UserList from "./Components/UserList";
import Root from "./screens/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [isLogin , setIsLogin] = useState(false)
  return (
    <NavigationContainer>
      {/* <Root /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen options={{headerShown: false}} name="Home"  component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Register"  component={SignUp}/>
        <Stack.Screen name="All Polls" component={Output} />
        <Stack.Screen name="Create poll" component={Addpoll} />
        <Stack.Screen name="Users List" component={UserList} />
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