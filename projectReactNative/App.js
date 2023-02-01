import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/main-bg.png")}
      ></ImageBackground>

      <View style={styles.form}>
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
          ></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            textAlign="left"
            secureTextEntry={true}
          ></TextInput>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text style={styles.btnTitle}>Sing up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.footerTitle}>Do you have account? Log in</Text>
      </View>

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
    justifyContent: "flex-end",
  },

  form: {
    height: 449,
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
    marginBottom: 45,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
});
