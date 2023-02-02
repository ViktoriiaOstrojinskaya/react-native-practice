import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [isShowPaddingForm, setIsShowPaddingForm] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/main-bg.png")}
      ></ImageBackground>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{ ...styles.form, paddingBottom: isShowPaddingForm ? 20 : 45 }}
        >
          <Text style={styles.inputTitle} textAlign="center">
            Registration
          </Text>
          <View>
            <TextInput
              style={[
                styles.input,
                {
                  marginBottom: 16,
                },
              ]}
              placeholder="Login"
              textAlign="left"
              onFocus={() => setIsShowPaddingForm(true)}
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={[
                styles.input,
                {
                  marginBottom: 16,
                },
              ]}
              placeholder="Email"
              textAlign="left"
              onFocus={() => setIsShowPaddingForm(true)}
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              textAlign="left"
              secureTextEntry={true}
              onFocus={() => setIsShowPaddingForm(true)}
            ></TextInput>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Sing up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.footerTitle}>Do you have account? Log in</Text>
        </View>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // alignItems: "center",
    //justifyContent: "flex-end",
    justifyContent: "center",
  },

  form: {
    // height: 449,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    height: 50,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
  },
  inputTitle: {
    // fontWeight: 500,
    fontSize: 30,
    // text: 1.16,
    color: "#212121",
    textAlign: "center",
    marginBottom: 32,
  },
  btn: {
    backgroundColor: "#ff6c00",
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
  },
  footerTitle: {
    marginTop: 16,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
});
