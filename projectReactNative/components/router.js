import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import Home from "./screens/mainScreens/Home";
import PostsScreen from "./screens/mainScreens/PostsScreen";
import CreatePostsScreen from "./screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "./screens/mainScreens/ProfileScreen";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="registration"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={Home} />
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};
