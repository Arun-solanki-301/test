import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const Addpoll = ({ navigation }) => {
  const [question, setQuestion] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  const [Datastatus, setDataStatus] = useState({
    status: false,
    text: "",
    color: "",
  });
  const [lodding, setlodding] = useState(false);

  const OnpressSendData = () => {
    if (question && opt1 && opt2 && opt3 && opt4) {
      setlodding(true);
      SendData(question, opt1, opt2, opt3, opt4);
    } else {
      setDataStatus({
        status: true,
        text: "input field should not be empty !!!",
        color: "red",
      });
    }
    setQuestion("");
    setOpt1("");
    setOpt2("");
    setOpt3("");
    setOpt4("");
    setTimeout(() => {
        setDataStatus({
          status: false,
          text: "",
          color: "",
        });
      }, 3000);
  };

  const SendData = (question, opt1, opt2, opt3, opt4) => {
    const Url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=${question}%20polll&options=${opt1}____${opt2}____${opt3}____${opt4}`;
    axios
      .post(Url)
      .then((res) => {
        if (res.data.error === 0) {
          setDataStatus({
            status: true,
            text: "poll successfully added!",
            color: "#1a73e8",
          });
        } else {
          setDataStatus({
            status: true,
            text: "wrong id",
            color: "red",
          });
        }
        setlodding(false);
      })
      .catch((error) => {
        setDataStatus({
          status: true,
          text: "something went wrong",
          color: "red",
        });
      });
  };

  return (
    <View style={{ marginHorizontal: 25 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#1a73e8",
          textAlign: "center",
          marginBottom: 15,
          marginTop: 20,
        }}
      >
        Add Your Poll
      </Text>
      {Datastatus.status && (
        <Text
          style={{
            fontSize: 20,
            color: Datastatus.color,
            marginTop: 10,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          {" "}
          {Datastatus.text}
        </Text>
      )}
      <View>
        <Text style={styles.label}> Enter poll title</Text>
        <TextInput
          style={styles.formInputs}
          value={question}
          onChangeText={(e) => setQuestion(e)}
        />
        <Text style={styles.label}> option : 1</Text>
        <TextInput
          style={styles.formInputs}
          value={opt1}
          onChangeText={(e) => setOpt1(e)}
        />
        <Text style={styles.label}> option : 2</Text>
        <TextInput
          style={styles.formInputs}
          value={opt2}
          onChangeText={(e) => setOpt2(e)}
        />
        <Text style={styles.label}> option : 3</Text>
        <TextInput
          style={styles.formInputs}
          value={opt3}
          onChangeText={(e) => setOpt3(e)}
        />
        <Text style={styles.label}> option : 4</Text>
        <TextInput
          style={styles.formInputs}
          value={opt4}
          onChangeText={(e) => setOpt4(e)}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.submitForm}
          onPress={() => OnpressSendData()}
        >
          <Text style={styles.submitText}>Add Poll</Text>
        </TouchableOpacity>
      </View>

      {lodding ? (
        <ActivityIndicator
          size="large"
          color="#1a73e8"
          style={{ marginTop: 20 }}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  FormBody: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    height: "100%",
  },
  formInputs: {
    borderColor: "#cccccc",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 5,
    borderRadius: 5,
    marginBottom: 15,
  },
  submitForm: {
    backgroundColor: "#1a73e8",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    width: 120,
    textAlign: "center",
  },
  submitText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
  },
  label: {
    fontSize: 16,
    color: "#1a73e8",
  },
});
export default Addpoll;
