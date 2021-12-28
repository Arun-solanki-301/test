import React from "react";
import {Text , View} from "react-native";
import Animated from "react-native-reanimated";
import { createStackNavigator , TransitionPreset } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../Components/LoginPage";
import SignUp from "../Components/SignUpPage";
import Output from "../Components/HomeCompo";
import Addpoll from "../Components/AddPoll";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator()
function Root() {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Login} />
        <Drawer.Screen name="signUp" component={SignUp} />
        <Drawer.Screen name="List of polls" component={Output} />
        <Drawer.Screen name="Addpoll" component={Addpoll} />
      </Drawer.Navigator>
    );
  }

  export default Root;