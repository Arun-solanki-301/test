import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, CheckBox } from "react-native";

const Output = ({ navigation }) => {
  const [Data, setData] = useState([]);
  // const [checkbox , setcheckbox] = useState(false)
  var count = 0;
  useEffect(() => {
    pollData();
  }, []);

  const pollData = () => {
    const Url = "https://secure-refuge-14993.herokuapp.com/list_polls";
    axios.get(Url).then((res) => {
      setData(res.data.data);
    });
  };
  const [isSelected, setSelection] = useState(false);
//   const checkboxPress = () => {
//     setcheckbox(true);
//   };

  console.log(Data);

  return (
    <View>
      {Data?.map((curr) => {
        return (
          <View key={curr.id}>
            <Text style={styles.TitleOfPoll}>{curr?.title}</Text>
            <View>
              {curr.options.map((opcurr) => {
                return (
                  // <View style = {styles.optionContainer}>
                  // <TouchableOpacity style={checkbox ?styles.checkboxTrue:styles.checkboxOpt}  onPress={()=>checkboxPress()}><Text></Text></TouchableOpacity>
                  // <Text style={styles.optionsOfPoll}>{opcurr.option}</Text>
                  // </View>
                  <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                      <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        id={count + 1}
                      />
                      <Text style={styles.label}>
                        Do you like React Native?
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
  optionsOfPoll: { color: "red", fontSize: 22, fontWeight: "500" },
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 15,
    padding: 20,
  },
  checkboxOpt: {
    height: 25,
    width: 25,
    borderColor: "#1a73e8",
    borderWidth: 2,
    marginRight: 10,
    borderRadius: "50%",
  },
  checkboxTrue: {
    height: 25,
    width: 25,
    borderColor: "#1a73e8",
    borderWidth: 2,
    marginRight: 10,
    borderRadius: "50%",
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default Output;
