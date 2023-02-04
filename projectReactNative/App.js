import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";

const initialState = {
  login: "",
  email: "",
  password: "",
};

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };

export default function App() {
  const [isShowPaddingForm, setIsShowPaddingForm] = useState(false);
  const [state, setState] = useState(initialState);
  // const [isReady, setIsReady] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowPaddingForm(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/main-bg.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowPaddingForm ? 20 : 45,
              }}
            >
              <Text style={styles.inputTitle} textAlign="center">
                Registration
              </Text>

              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    marginBottom: 16,
                    width: dimensions,
                  }}
                  placeholder="Login"
                  textAlign="left"
                  onFocus={() => setIsShowPaddingForm(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>

              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    marginBottom: 16,
                    width: dimensions,
                  }}
                  placeholder="Email"
                  textAlign="left"
                  onFocus={() => setIsShowPaddingForm(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>

              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    marginBottom: 16,
                    width: dimensions,
                  }}
                  placeholder="Password"
                  textAlign="left"
                  secureTextEntry={true}
                  onFocus={() => setIsShowPaddingForm(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Sing up</Text>
              </TouchableOpacity>

              <Text style={styles.footerTitle}>
                Do you have account? Log in
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    alignItems: "center",
    justifyContent: "flex-end",
    // justifyContent: "center",
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
