import React, { useEffect } from "react";
import {Text , View , ActivityIndicator, StyleSheet , SafeAreaView} from 'react-native'
import axios from "axios";

import { FlatList } from "react-native-gesture-handler"
import { useState } from "react/cjs/react.development";

const UserList = ()=>{
    const [UserData , setUserData] = useState("");
    const [lodding , setlodding] = useState(false)
    useEffect(()=>{
        setlodding(true)
        Data();
    },[])
    const Data = ()=>{
        const Url = `https://secure-refuge-14993.herokuapp.com/list_users`;
        const res = axios.get(Url)
        res.then((data)=>{
            if(data.data.error === 0){
                setUserData(data.data.data)
            }
            setlodding(false)
        })
    }
    return(
      
        <View style = {{height : "100%", overflow : "scroll"}}>
            {lodding ? <ActivityIndicator size = "large" color="red" style={{marginTop : 20 , position :"relative", top : "50%"}}/> : null}
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <FlatList data={UserData} renderItem={({item})=>{
                return (
                <View style = {styles.users}>
                    <Text style = {styles.ItemText}>{item.username}</Text>
                    <Text style = {styles.ItemText}>{item.role}</Text>
                </View>
                )
            }} />
        </View>
        
       
    )
}
const styles = StyleSheet.create({
    users :{
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around"
    },
    headerText : {
        fontSize : 25,
        fontWeight : "800",
        color : "#1a73e8",
        textAlign : "center",
        marginTop:15,
        marginBottom : 15,
        // textDecoration : "underline",
        // textDecorationColor : "#1a73e8"
    },
    ItemText : {
        fontSize :  16,
        textAlign : "left",
        marginTop:10,
        marginBottom : 10,  
    }
})

export default UserList