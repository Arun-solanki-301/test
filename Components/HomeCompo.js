import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Output = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [checkedStatus , setCheckedStatus] = useState(false);

  useEffect(() => {
    pollData();
  }, []);

  const pollData = async () => {
    const Url = "https://secure-refuge-14993.herokuapp.com/list_polls";
    let res = await axios.get(Url);
    setData(res.data.data);
  };

  // provide ids ........
  let newArr = [];
  const checkboxPress = (id, option) => {
    Data.forEach((ques) => {
      if (ques._id === id) {
        // console.log(id, ques, option);
        newArr.push({
          id: id,
          option_text: option,
        });
        // console.log(newArr)
      }
    });

    // Data?.forEach((curr) => {
    //   curr.options.forEach((elem) => {
    //     if (id === elem.id) {
    //       if (!newArr.includes(id)) {
    //         newArr.push(id);
    //       } else newArr.filter((value) => value.id !== id);
    //     }
    //     console.log(newArr, "aaaaaaaaaaaaa");
    //   });
    // });
  };

  // const getChecked = (id, option) => {
  //   let checked = false
  //   newArr.forEach(val=>{
  //     if(val.id === id){
  //       if(val.option_text === option){
  //         checked = true
  //       }
  //     }
  //   })
  //   console.log(id, option, checked)
  //   return checked
  // }
  // console.log(Data)

  let newlyArr = [];
  var count = 0;
  Data?.forEach((curr)=>{
    curr.options.forEach((elem)=>{
      elem.id = count;
      count++
    })
  })
  //hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
  const handleCheckedBox = (element)=>{
    Data?.forEach((curr)=>{
      curr.options.forEach((elem)=>{
        if(elem.id === element.id){
          if(!newlyArr.includes(element.id)){
            newlyArr.push(element.id)
          }
        }
        else newlyArr.filter((value) => value !== element.id)
      })
    })
    // setCheckedStatus(!checkedStatus)
    console.log(newlyArr)
  }



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
                      <TouchableOpacity style={checkedStatus ? styles.checkboxTrue : styles.checkboxOpt} onPress={()=>handleCheckedBox(opcurr)}> 
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
    backgroundColor: "green",
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
  },
});

export default Output;
