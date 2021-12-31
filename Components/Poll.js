import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Poll = ({ curr }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [userToken , setuserToken] = useState("");

  useEffect(() => {
    const getToken = async ()=>{
      const token = AsyncStorage.getItem('token')
      if (token !== null) {
        token.then((res)=>{
          setuserToken(res)
        })
    }
    }
    getToken()
  }, []);

  const submitPoll = async () => {
    try {
      const url = `https://secure-refuge-14993.herokuapp.com/do_vote?id=${curr._id}&option_text=${selectedOption}`;
      const res = await axios.post(url, null, {
        headers: { access_token: userToken },
      });
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <View>
      <Text style={styles.TitleOfPoll}>{curr.title}</Text>
      <View>
        {curr.options.map((opcurr, i) => {
          return (
            <View key={i} style={styles.container}>
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={
                    selectedOption === opcurr.option ? styles.checkboxTrue : styles.checkboxOpt
                  }
                  onPress={() => setSelectedOption(opcurr.option)}
                >
                  <Text></Text>
                </TouchableOpacity>
                <Text>{opcurr.option}</Text>
              </View>
            </View>
          );
        })}
      </View>
      {
        <View style={{ display: "flex", alignItems: "center" }}>
          <TouchableOpacity
            id={curr._id}
            style={styles.submitForm}
            onPress={submitPoll}
            disabled={!selectedOption}
          >
            <Text style={styles.submitText}>Submit Poll</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};
export default Poll;

const styles = StyleSheet.create({
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
    backgroundColor: "blue",
  },
  submitForm: {
    backgroundColor: "#1a73e8",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    width: 200,
    textAlign: "center",
    marginBottom: 50,
  },
  submitText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
  },
});
