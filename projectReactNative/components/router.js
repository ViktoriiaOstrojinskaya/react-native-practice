import React from "react";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
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
