import React from "react";
import { Text, View } from "react-native";

import {
  createStackNavigator,
  TransitionPreset,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../Components/LoginPage";
import SignUp from "../Components/SignUpPage";
import Output from "../Components/HomeCompo";
import Addpoll from "../Components/AddPoll";
import UserList from "../Components/UserList";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator()
function Root() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Login}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Register"
        component={SignUp}
      />
      <Drawer.Screen
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#1a73e8",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize : 20
          },
        }}
        name="All Polls"
        component={Output}
      />
      <Drawer.Screen
         options={{
          headerStyle: {
            backgroundColor: "#1a73e8",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize : 20,
            
          },
        }}
      name="Create poll" component={Addpoll} />

      <Drawer.Screen
         options={{
          headerStyle: {
            backgroundColor: "#1a73e8",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize : 20
          },
        }}
      name="Users List" component={UserList} />
    </Drawer.Navigator>
  );
}

export default Root;
