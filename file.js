import React , {useState} from "react";
import { TextInput, TouchableOpacity, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { validPassword  , passwordLengthValidation , emailLengthValidation , emailOtherValidation , passwordConfirmation} from '../formFunctions/LoginFunction'
import axios from "axios";
function SignUp({navigation}){
    const [userEmail, setuserEmail] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [isEmailLengthValid, setIsEmailLengthValid] = useState(true);
    const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isConfirm , setIsConfirm] = useState(true);
    const [DataStatus, setDataStatus] = useState(false);
    const [count, setCount] = useState(0);

    const formValidate = () => {
        setCount(1);
        // email validation............
        if (emailLengthValidation(userEmail)) {
          setIsEmailLengthValid(true);
          if (emailOtherValidation(userEmail)) setIsEmailValid(true);
          else setIsEmailValid(false);
        } else {
          setIsEmailLengthValid(false);
        }

        // password Validations................
        if (passwordLengthValidation(userPassword)) {
          setIsPasswordLengthValid(true);
          if (validPassword(userPassword)) setIsPasswordValid(true);
          else setIsPasswordValid(false);
        } else {
          setIsPasswordLengthValid(false);
        }

        // confirm password validation......
        if(passwordConfirmation(userPassword , confirmPassword)){
            setIsConfirm(true)
        }else{
            setIsConfirm(false)
        }

        // console.log(userEmail ,userPassword , confirmPassword)
        // console.log(isEmailLengthValid ,isPasswordLengthValid , isPasswordValid, isEmailValid, isConfirm , count)

        if (
            isEmailLengthValid &&
            isPasswordLengthValid &&
            isPasswordValid &&
            isEmailValid &&
            isConfirm &&
            count
          ) {
              SignUpData()
          }
    }
// form validation ends........................................
const SignUpData = () => {
    const Url =
      "https://secure-refuge-14993.herokuapp.com/add_user?username=admin&password=admin&role=admin";
    axios
      .post(Url, {
        username: userEmail,
        password: userPassword,
        confirm_Password : confirmPassword
      })
      .then(
        (res) => {
      navigation.navigate("Output")
            console.log()
          if (res.status >= 200) {
            setDataStatus(true);
          }
        },
        (error) => {
          if (res.status < 200) {
            setDataStatus(false);
          }
        }
      );
  };


    return(
        <View style={styles.FormBody}> 
       
        <View style={styles.container}>
        <Text style={{fontSize : 25 , fontWeight : "bold" , color :"#1a73e8" , textAlign : "center", marginBottom : 25}}>Register With Polling App</Text>
        </View>
        <TextInput placeholder=" Email" style={styles.formInputs} value={userEmail} onChangeText={(e)=>setuserEmail(e)}/>
        {isEmailLengthValid && isEmailValid ? null : (
        <Text>incorrect email pattern</Text>
      )}
        <TextInput placeholder="Password" style={styles.formInputs} value={userPassword} onChangeText={(e)=>setuserPassword(e)}/>
        {isPasswordLengthValid && isPasswordValid ? null : (
        <Text>incorrect password pattern</Text>
      )}
        <TextInput placeholder="Confirm Password" style={styles.formInputs} value={confirmPassword} onChangeText={(e)=>setconfirmPassword(e)}/>
        {isConfirm? null : 
        <Text>incorrect password pattern</Text>}

        <View style={{display : "flex", alignItems : "center"}}>
        <TouchableOpacity style={styles.submitForm} onPress={()=>formValidate()}><Text style={styles.submitText} >Sign Up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signUpOnLogin} onPress={() =>
        navigation.navigate('Home')}><Text style={styles.signUpOnLoginText} >already a user? login instead</Text></TouchableOpacity>
        </View>
        {DataStatus && <Text>Fail login </Text>}
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