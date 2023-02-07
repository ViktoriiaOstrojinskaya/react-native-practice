import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./components/Screens/registarScreen/RegistrationScreen";
import LoginScreen from "./components/Screens/registarScreen/LoginScreen";
import Home from "./components/Screens/mainScreens/Home";
import PostsScreen from "./components/Screens/mainScreens/PostsScreen";
import CreatePostsScreen from "./components/Screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "./components/Screens/mainScreens/ProfileScreen";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };

export default function App() {
  // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  const routing = useRoute(null);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
