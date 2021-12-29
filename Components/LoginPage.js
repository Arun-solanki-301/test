import React, { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [DataStatus, setDataStatus] = useState({ staus: false, msg: "" });
  const [formStatus, setformStatus] = useState({ status: false, msg: "" });
  const [lodding , setlodding] = useState(false);
  const [getName , setGetName] = useState("");

  useEffect(()=>{
    async function getUserName() {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
            navigation.navigate("All Polls")
        }
        }catch {
        console.log(error)
        }
    }
    getUserName();
  })
 

  const formValidate = () => {
    if (userName.length === 0 || userPassword.length === 0) {
      setformStatus({ status: true, msg: "fiels should not be empty" });
    } else {
      setDataStatus({staus : true , msg : ""});
      setformStatus({status : false , msg : ""});
      setlodding(true)
      LoginData(userName , userPassword);
     
    }
  };

  const LoginData = (name , password) => {

      const Url =`https://secure-refuge-14993.herokuapp.com/login?username=${name}&password=${password}`;
      axios.post(Url).then((res) => {
        if(res.status === 200){
          if (res.data.error === 0) {
            navigation.navigate("All Polls");
            setDataStatus({staus : true , msg : ""});
            storage(res.data , name)
          }
          setlodding(false)
          if (res.data.error === 1) {
            setDataStatus({ staus: true, msg: res.data.data });
          }
        }
      });
  };

  const storage = async (data , name)=>{
    try { 
      await AsyncStorage.setItem('token', String(data.token));
      await AsyncStorage.setItem('username', name);
      
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <View style={styles.FormBody}>
       
      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#1a73e8",
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          Polling App
        </Text>
      </View>
      <TextInput
        placeholder="user Name"
        style={styles.formInputs}
        value={userName}
        onChangeText={(e) => {
          setuserName(e);
        }}
      />

      <TextInput
        placeholder="Password"
        style={styles.formInputs}
        value={userPassword}
        secureTextEntry={true}
        onChangeText={(e) => {
          setuserPassword(e);
        }}
      />
      {formStatus.status && <Text style={{fontSize : 12, color : "red"}}>{formStatus.msg}</Text>}

      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.submitForm}
          onPress={() => formValidate()}
        >
          <Text style={styles.submitText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpOnLogin}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.signUpOnLoginText}>
            new user? sign up instead
          </Text>
        </TouchableOpacity>
      </View>


      {/* <TouchableOpacity
          style={styles.signUpOnLogin}
          onPress={() => navigation.navigate("Addpoll")}
        >
          <Text style={styles.signUpOnLoginText}>
            go to the add poll screen
          </Text>
        </TouchableOpacity> */}


      {DataStatus.staus && <Text>{DataStatus.msg}</Text>}
      {lodding ? <ActivityIndicator size = "large" color="red" style={{marginTop : 20}}/> : null}
    </View>
  );    
}

const styles = StyleSheet.create({
  FormBody: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    height: "100%",
  },
  formInputs: {
    borderColor: "#cccccc",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  formInputsFalse: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  submitForm: {
    backgroundColor: "#1a73e8",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    width: 120,
    textAlign: "center",
  },
  submitText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
  },
  signUpOnLogin: {
    marginTop: 15,
  },
  signUpOnLoginText: {
    fontSize: 15,
    color: "red",
  },
  formTextError: {
    color: "red",
  },
});

export default Login;