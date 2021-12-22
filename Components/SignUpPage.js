import React from "react";
import { TextInput, TouchableOpacity, Text, View, StyleSheet, ActivityIndicator } from 'react-native';

function SignUp({navigation}){
    return(
        <View style={styles.FormBody}> 
        <ActivityIndicator size="large" />
        <View style={styles.container}>
        <Text style={{fontSize : 25 , fontWeight : "bold" , color :"#1a73e8" , textAlign : "center", marginBottom : 25}}>Register With Polling App</Text>
        </View>
        <TextInput placeholder=" Email" style={styles.formInputs}/>
        <TextInput placeholder="Password" style={styles.formInputs}/>
        <TextInput placeholder="Confirm Password" style={styles.formInputs}/>
        <View style={{display : "flex", alignItems : "center"}}>
        <TouchableOpacity style={styles.submitForm}><Text style={styles.submitText} >Sign Up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signUpOnLogin} onPress={() =>
        navigation.navigate('Home')}><Text style={styles.signUpOnLoginText} >already a user? login instead</Text></TouchableOpacity>
        </View>
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