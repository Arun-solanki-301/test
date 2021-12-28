import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const Output = ({ navigation }) => {
  const [Data, setData] = useState([]);
  // const [voteCount , setvoteCount] = useState(0)


  useEffect(() => {
    pollData();
  }, []);

  const pollData = async () => {
    const Url = "https://secure-refuge-14993.herokuapp.com/list_polls";
    let res = await axios.get(Url);
    setData(res.data.data);
    // console.log(res.data.data)
  };
  const handleCheckedBox = (option,Qid)=>{
    let vote = 0;
    setData(Data?.map((curr)=>{
      if(Qid == curr._id){
        curr.options.map((elem)=>{
          elem.checked = false
          elem.vote = 0;
          if(elem.option === option){
            elem.checked = elem.checked ? !elem.checked: true;
            elem.vote = vote + 1
            console.log(curr)

          }

        })
      }
      return curr
    }))
  }
 
//  console.log(Data)
 

  return (
    <ScrollView>
    <View>
      {Data?.map((curr, i) => {
        return (
          <View key={i}>
            <Text style={styles.TitleOfPoll}>{curr.title}</Text>
            <View>
              {curr.options.map((opcurr, i) => {
                return (
                  <View key={i} style={styles.container}>
                    <View style={styles.checkboxContainer}>
                      <TouchableOpacity  style={opcurr.checked ? styles.checkboxTrue : styles.checkboxOpt} onPress={()=>handleCheckedBox(opcurr.option, curr._id)}> 
                        <Text></Text>
                        </TouchableOpacity>
                        <Text>{opcurr.option}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  // container : {
  //     backgroundColor:"#ccc"
  // },
  TitleOfPoll: {
    fontSize: 25,
    color: "#1a73e8",
    fontWeight: "bold",
    textAlign: "center",
  },
  optionsOfPoll: {
    color: "red",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
  },
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    // marginHorizontal: 15,
    // padding: 20,
  },
  checkboxOpt: {
    height: 25,
    width: 25,
    borderColor: "#1a73e8",
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 5,
  },
  checkboxTrue: {
    height: 25,
    width: 25,
    borderColor: "#1a73e8",
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#1a73e8",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 25,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 15,
    backgroundColor: "blue"
  }
})

export default Output 
