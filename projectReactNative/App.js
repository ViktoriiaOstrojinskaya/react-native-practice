import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./components/router";

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
  const routing = useRoute(false);
  

  return <NavigationContainer>{routing}</NavigationContainer>;
}
