import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
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
            style={styles.input}
            placeholder="Login"
            textAlign="left"
          ></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            textAlign="left"
          ></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            textAlign="left"
          ></TextInput>
        </View>
        <Button title="Sing up" />
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
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    height: 549,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    height: 50,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 16,
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
});
