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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 160,
    backgroundColor: "#ffffff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 50,
    marginHorizontal: 16,
  },
  inputTitle: {},
});
