import React, { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet , Image } from "react-native";
// import Login from "../Components/LoginPage";
// import SignUp from "../Components/SignUpPage";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';

function CustomDrawer({ navigation }) {
  const [GetName , setGetName] = useState("")

    useEffect(() => {
      async function getUserName() {
        try {
          const user_name = await AsyncStorage.getItem('username');
          if (user_name !== null) {
          setGetName(user_name)
          }
          }catch {
          console.log(error)
          }
      }
      getUserName(); 

    }, [GetName]);
    const clearLocal = () =>{
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('username');
      setGetName("");
      navigation.navigate("Home");
    }
    const gotoLogin = ()=>{
      if(!GetName){
        navigation.navigate("Home");
      }
      else{
        navigation.navigate("All Polls");
      }
    }

    
  return (
    <View style={styles.container}>
      <View style={styles.drawerUpper}>
        <View style={{display  :"flex" , flexDirection : "column" , alignItems : "center", marginHorizontal  :15 , marginBottom : 25}}>
          <Image source={require('../Assets/user1.jpg')} style={{width : 50 , height : 50, borderRadius : 50}}/>
          <TouchableOpacity onPress={()=>gotoLogin()}>
          <Text style={{fontSize : 18, color : "#fff" , textAlign : "center"}}>{GetName}</Text></TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            gotoLogin()
          }}
          style={styles.drawerBtns}
        >
          <View style={styles.BtnDiv}>
            <Icon name="home" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>Home</Text>
          </View>
        </TouchableOpacity> */}
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
            navigation.navigate("Users List");
          }}
          style={styles.drawerBtns}
        >
          <View style={styles.BtnDiv}>
            <Icon name="users" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>Users List</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("All Polls");
          }}
          style={styles.drawerBtns}
        >
          <View style={styles.BtnDiv}>
            <Icon name="list" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>All Polls</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{display : "flex" , flexDirection : "row" , justifyContent : "space-between", alignItems : "center", marginBottom : 40}}>
        <TouchableOpacity
          onPress={() => {
            clearLocal()
          }}
          style={{...styles.drawerBtns }}
        >
          <View style={styles.BtnDiv}>
            <Icon name="sign-out" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>LogOut</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{...styles.drawerBtns }}
        >
          <View style={styles.BtnDiv}>
            <Icon name="sign-out" size={25} color="#fff" />
            <Text style={styles.drawerBtnsText}>signup</Text>
          </View>
        </TouchableOpacity> */}
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
    marginTop : 2
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