import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, CheckBox } from "react-native";

const Output = ({ navigation }) => {
  const [Data, setData] = useState([]);
  // const [checkbox , setcheckbox] = useState(false)

  useEffect(() => {
    pollData();
  }, []);

  const pollData = () => {
    const Url = "https://secure-refuge-14993.herokuapp.com/list_polls";
    axios.get(Url).then((res) => {
      setData(res.data.data);
    });
  };
  const [isSelected, setIsSelected] = useState(false);


  
  // provide id ........
  let count = 0;
  Data?.forEach((curr)=>{
    curr.options.forEach((elem)=>{
        elem.id = count;
        count++;
    })
  })

  let newArr = [];
  const checkboxPress = (id) => {
    Data?.forEach((curr)=>{
      curr.options.forEach((elem)=>{
        console.log(elem , id)
        if(id === elem.id){
          if(newArr.includes(id))
          newArr.push(id)
          else newArr.filter((value)=>value.id !== id)
        }

        
        console.log(newArr ,"aaaaaaaaaaaaa")
        // else{
        //   setIsSelected(false)
        // }
      })
    })
    }
    console.log(newArr , Data ,"dhwkdkdkwjdkwjdkwj")
  return (
    <View>
      {Data?.map((curr , outerIndex) => {
        return (
          <View key={curr.id}>
            <Text style={styles.TitleOfPoll}>{curr?.title}</Text>
            <View>
              {curr.options.map((opcurr , innerIndex) => {
                return (
                  <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                      <CheckBox
                        value={newArr.includes(opcurr.id)}
                        onValueChange={()=>checkboxPress(opcurr.id)}
                        style={styles.checkbox} 
                      />
                      <Text style={styles.optionsOfPoll}>
                        {opcurr.option}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
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
  optionsOfPoll: { color: "red", fontSize: 22, fontWeight: "500" , textAlign : "center" },
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
    borderRadius: "50%",
  },
  // checkboxTrue: {
  //   height: 25,
  //   width: 25,
  //   borderColor: "#1a73e8",
  //   borderWidth: 2,
  //   marginRight: 10,
  //   borderRadius: "50%",
  //   backgroundColor: "green",
  // },
  container: {
    flex: 1,
    alignItems : "flex-start",
marginHorizontal : 25

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent : "space-between"
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 15,
    

  },

  
});

export default Output;
