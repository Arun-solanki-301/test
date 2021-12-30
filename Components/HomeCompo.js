import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Output = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [lodding, setloading] = useState(false);
  const [submitPollBtn , setSubmitPollBtn] = useState(false)
  const [questionId , setQuestionId] = useState("");
  const [opt , setopt] = useState("")
  const [userToken , setuserToken] = useState("")
  useEffect(() => {
    const getToken = async ()=>{
      const token = AsyncStorage.getItem('token')
      if (token !== null) {
        token.then((res)=>{
          setuserToken(res)
        })
    }else{
      setSubmitPollBtn(false)
    }
    }
    getToken()
    setloading(true);
    pollData();
  }, []);
  
  const pollData = async () => {
    const Url = "https://secure-refuge-14993.herokuapp.com/list_polls";
    let res = await axios.get(Url);
    setData(res.data.data);
    setloading(false);
  };
  const handleCheckedBox = (option, Qid) => {
    let vote = 0;
    setData(
      Data?.map((curr) => {
        if (Qid == curr._id) {
          curr.options.map((elem) => {
            elem.checked = false;
            elem.vote = 0;
            if (elem.option === option) {
              elem.checked = elem.checked ? !elem.checked : true;
              elem.vote = vote + 1;
              setopt(elem.option);
              setQuestionId(Qid)
              setSubmitPollBtn(true)
            }
          });
        }
        return curr;
      })
    );
  };
  const submitPoll = async ()=>{
    const url = `https://secure-refuge-14993.herokuapp.com/do_vote?id=${questionId}&option_text=${opt}`
    const res = await axios.post(url , null, {
      headers: { access_token : userToken }
    })
    console.log(res)
  }
// console.log(userToken)
  return (
    <ScrollView>
      {lodding ? (
        <ActivityIndicator
          size="large"
          color="#1a73e8"
          style={{ position: "absolute", top: 330, left: 190 }}
        />
      ) : null}
      <View style={{ marginTop: 30 }}>
        {Data?.map((curr, i) => {
          return (
            <View key={i}>
              <Text style={styles.TitleOfPoll}>{curr.title}</Text>
              <View>
                {curr.options.map((opcurr, i) => {
                  return (
                    <View key={i} style={styles.container}>
                      <View style={styles.checkboxContainer}>
                        <TouchableOpacity
                          style={
                            opcurr.checked
                              ? styles.checkboxTrue
                              : styles.checkboxOpt
                          }
                          onPress={() =>
                            handleCheckedBox(opcurr.option, curr._id)
                          }
                        >
                          <Text></Text>
                        </TouchableOpacity>
                        <Text>{opcurr.option}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              {submitPollBtn &&<View style={{ display: "flex", alignItems: "center" }}>
                <TouchableOpacity style={styles.submitForm} onPress={()=>submitPoll()}>
                  <Text style={styles.submitText}>Submit Poll</Text>
                </TouchableOpacity>
              </View>}
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

export default Output;
