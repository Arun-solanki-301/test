import axios from "axios";
import React, { useEffect } from "react";
import {Text , View , StyleSheet , TouchableOpacity} from 'react-native';
import { useState } from "react/cjs/react.development";

const Output = ({navigation})=>{
    const [Data , setData] = useState([]);
    const [checkbox , setcheckbox] = useState(false)
    var count = 0;
    useEffect(()=>{
        pollData();
    },[])

    const pollData = ()=>{
        const Url = "https://secure-refuge-14993.herokuapp.com/list_polls";
        axios.get(Url).then((res)=>{
            setData(res.data.data);
        })
    } 

    const checkboxPress = ()=>{
        setcheckbox(true);
    }
    
    console.log(Data)



    return(
        <View>
            {
            Data?.map((curr)=>{
                return (
                <View>
                <Text style = {styles.TitleOfPoll}>{curr?.title}</Text>
                <View>
                {
                curr.options.map((opcurr)=>{
                    return(
                        <View style = {styles.optionContainer}>
                        <TouchableOpacity style={checkbox ?styles.checkboxTrue:styles.checkboxOpt}  onPress={()=>checkboxPress()}><Text></Text></TouchableOpacity>
                        <Text style={styles.optionsOfPoll}>{opcurr.option}</Text>
                        </View>
                    )
                })
            }
                </View>
                
                </View>
                )
            })
        }
        </View>
    )
};
const styles = StyleSheet.create({
    container : {
        backgroundColor:"#ccc"
    },
    TitleOfPoll : {
        fontSize : 25,
        color : "#1a73e8",
        fontWeight  : "bold",
        textAlign : "center"
    },
    optionsOfPoll : {color : "red",
    fontSize : 22,
    fontWeight : "500"
},
optionContainer :{
    display : "flex",
    flexDirection : "row",
    marginHorizontal :15,
    padding : 20  
},
checkboxOpt : {
    height : 25,
    width : 25,
    borderColor : "#1a73e8",
    borderWidth : 2,
    marginRight : 10,
    borderRadius : "50%"
},
checkboxTrue :{
    height : 25,
    width : 25,
    borderColor : "#1a73e8",
    borderWidth : 2,
    marginRight : 10,
    borderRadius : "50%",
    backgroundColor : "green"
}


});



export default Output;