import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AuthScreen from "../screens/auth/AuthScreen";
import { useAppSelector } from "../store/hooks";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
