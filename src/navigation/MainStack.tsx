import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { FC, useEffect } from "react";
import { screenNames } from "../constants/screenNames";
import { StartScreen } from "../screens/register/StartScreen";
import { FirstFormScreen } from "../screens/register/FirstFormScreen";
import { SecondFormScreen } from "../screens/register/SecondFormScreen";
import { ThirdFormScreen } from "../screens/register/ThirdFormScreen";
import { FinalScreen } from "../screens/register/FinalScreen";

const Stack = createNativeStackNavigator();

export const MainStack: FC = () => {

  const simpleOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerTitle: "",
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenNames.StartScreen} component={StartScreen} options={simpleOptions} />
      <Stack.Screen name={screenNames.FirstFormScreen} component={FirstFormScreen} />
      <Stack.Screen name={screenNames.SecondFormScreen} component={SecondFormScreen} />
      <Stack.Screen name={screenNames.ThirdFormScreen} component={ThirdFormScreen} />
      <Stack.Screen name={screenNames.FinalScreen} component={FinalScreen} />
    </Stack.Navigator>
  );
};
