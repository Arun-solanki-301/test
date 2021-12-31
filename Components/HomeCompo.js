import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Polls from "./Polls";
import Animated from "react-native-reanimated";
const Output = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [lodding, setloading] = useState(false);
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
    setloading(true);
    pollData();
  }, []);
  
  const pollData = async () => {
    const Url = "https://secure-refuge-14993.herokuapp.com/list_polls";
    let res = await axios.get(Url);
    setData(res.data.data);
    setloading(false);
  };
  
  return (
    <ScrollView>
      {lodding ? (
        <ActivityIndicator
          size="large"
          color="#1a73e8"
          style={{ position: "absolute", top: 330, left: 190 }}
        />
      ) : null}
      <View>
        <Polls Data = {Data} />
      </View>
    </ScrollView>
  );
};


export default Output;
