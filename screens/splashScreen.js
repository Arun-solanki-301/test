import React from "react";
import {View , Text} from 'react-native';

const Splash = ({navigation}) =>{
    setTimeout(()=>{
        navigation.navigate("Home")
    } , 3000)
    
    return (
        <View style={{flex : 1 , justifyContent :"center" , backgroundColor : "#fff"}}>
            <View style = {{display : "flex" , flexDirection : "column" , justifyContent  : "center" , alignItems : "center"}}>
            <View style ={{display:"flex" , justifyContent : "center" , alignItems :"center"}}>
                <View style={{backgroundColor : "#1a73e8" , borderRadius : 110 , padding :20, width :150}}>
                <Text style ={{color : "#fff" , fontSize : 80 , textAlign : " center" , fontWeight : "800"}}>P</Text></View>
                <Text style={{textAlign : "center" , fontWeight : "500" , fontSize : 40 , color : "#1a73e8"}}>Polling App</Text>            
                </View>
            </View>
        </View>
    )
}
export default Splash;
// 1a73e8