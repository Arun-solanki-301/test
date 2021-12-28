import React from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Login from "../Components/LoginPage";
import SignUp from "../Components/SignUpPage";
import Icon from "react-native-vector-icons/FontAwesome";

function CustomDrawer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.drawerUpper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.drawerBtns}
        >
          <View style={styles.BtnDiv}>
            <Icon name="home" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Create poll");
          }}
          style={styles.drawerBtns}
        >
          <View style={styles.BtnDiv}>
            <Icon name="user-plus" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>Create poll</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("User list");
          }}
          style={styles.drawerBtns}
        >
          <View style={styles.BtnDiv}>
            <Icon name="list" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>User list</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={styles.drawerBtns}
        >
          <View style={styles.BtnDiv}>
            <Icon name="sign-out" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0 ,0,0,0.9)",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerBtns: {
    // borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    // backgroundColor: "#ccc",
    // width: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  drawerBtnsText: {
    color: "#1a73e8",
    textAlign: "left",
    fontSize: 20,
    marginLeft: 15,
    marginTop : 5
  },
  drawerUpper: {
    marginTop: 25,
  },
  BtnDiv :{
      display : "flex",
      flexDirection : "row",
    //   justifyContent : "space-around",
      alignItems : "center",
      marginHorizontal : 18

  }
});

export default CustomDrawer;
