import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { screenNames } from "../constants/screenNames";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SecondScreen } from "../screens/home/SecondScreen";

const Stack = createNativeStackNavigator();

export const MainStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenNames.LoginScreen} component={LoginScreen} />

      {/* <Stack.Screen name={screenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={screenNames.SecondScreen} component={SecondScreen} /> */}
    </Stack.Navigator>
  );
};
