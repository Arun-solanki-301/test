import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [confirmPassword , setconfirmPassword] = useState("");
  const [DataStatus, setDataStatus] = useState({ staus: false, msg: "" });
  const [formStatus, setformStatus] = useState({ status: false, msg: "" });
  const [lodding , setlodding] = useState(false);
 

  const formValidate = () => {
    if (userName.length === 0 || userPassword.length === 0 || confirmPassword.length === 0) {
      setformStatus({ status: true, msg: "field should not be empty" });
    } else if (userPassword !== confirmPassword){
      setformStatus({ status: true, msg: "password not match" });
    }
    else {
      setformStatus({status : false , msg : ""});
      setlodding(true)
      
      SignUpData(userName , userPassword);
    }
  };

  const SignUpData = (name , password) => {

      const Url =`https://secure-refuge-14993.herokuapp.com/add_user?username=${name}&password=${password}&role=${password}`;
      axios.post(Url).then((res) => {
        if (res.data.error === 0) {
          navigation.navigate("All Polls");
          setDataStatus({staus : true , msg : ""});
          // console.log(res);
        }
        setlodding(false)
        if (res.data.error === 1) {
          setDataStatus({ staus: true, msg: res.data.message });
        }
      });
  };

    return(
        <View style={styles.FormBody}> 
       
        <View style={styles.container}>
        <Text style={{fontSize : 25 , fontWeight : "bold" , color :"#1a73e8" , textAlign : "center", marginBottom : 25}}>Register With Polling App</Text>
        </View>
        <TextInput placeholder=" Name" style={styles.formInputs} value={userName} onChangeText={(e)=>setuserName(e)}/>
        <TextInput placeholder="Password" secureTextEntry={true}  style={styles.formInputs} value={userPassword} onChangeText={(e)=>setuserPassword(e)}/>
      
        <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.formInputs} value={confirmPassword} onChangeText={(e)=>setconfirmPassword(e)}/>
        {formStatus.status && <Text style={{fontSize : 12, color : "red"}}>{formStatus.msg}</Text>}
        <View style={{display : "flex", alignItems : "center"}}>
        <TouchableOpacity style={styles.submitForm} onPress={()=>formValidate()}><Text style={styles.submitText} >Sign Up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signUpOnLogin} onPress={() =>
        navigation.navigate('Home')}><Text style={styles.signUpOnLoginText} >already a user? login instead</Text></TouchableOpacity>
        </View>
        
         {DataStatus.staus && <Text style={{fontSize : 16, marginTop:15 , color : "green"}}>{DataStatus.msg}</Text>}
         {lodding ? <ActivityIndicator size = "large" color="red"/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    FormBody : {
        backgroundColor : "#fff",
        padding : 15,
        width:'100%',
        height :'100%'
    },
    formInputs:{
        borderColor : "#cccccc",
        borderWidth : 2,
        backgroundColor : "#ffffff",
        paddingHorizontal : 15,
        paddingVertical : 5,
        marginTop : 10,
        borderRadius : 5
    },
    submitForm:{
        backgroundColor : "#1a73e8",
        padding : 10,
        marginTop : 30,
        borderRadius : 5,
        width : 120,
        textAlign : "center"
    },
    submitText :{
        fontSize : 20,
        textAlign : "center",
        color : "#ffffff"
    },
    signUpOnLogin :{
        marginTop:15
    },
    signUpOnLoginText :{
        fontSize : 15,
        color : "red"
    }

})

export default SignUp;