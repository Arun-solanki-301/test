import Poll from "./Poll";
import React, { useEffect, useState } from "react";
import {
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Polls = (props) => {
  const Data = props.Data;
  const handleCheckedBox = props.handleCheckedBox;
  const submitPoll = props.submitPoll;

  return (
    <ScrollView>
      <View style={{ marginTop: 30 }}>
        {Data?.map((curr, i) => (
          <Poll curr={curr} />
        ))}
      </View>
    </ScrollView>
  );
};
export default Polls;
