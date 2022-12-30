import { CommonActions, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { screenNames } from "../constants/screenNames";
import { subscribeToUser } from "../redux/features/auth/authSlice";
import { AuthState } from "../redux/features/auth/AuthTypes";
import { AppDispatch, RootState } from "../redux/store/store";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import { HomeDrawer } from "./HomeDrawer";

const Stack = createNativeStackNavigator();

export const MainStack: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  // con esto hago escucha de los elementos del Store
  const { authenticationState } = useSelector<RootState, AuthState>(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(subscribeToUser());
  }, []);

  // hago esucha de los cambios de estado de la autenticacion para navegar a los lugares correspondientes.
  useEffect(() => {
    if (authenticationState === "Authenticated") {
      // aqui navego al HomeDrawe que podria ser cualquier stack o drawer o cualquier 
      // tipo de pantalla que corresponda a la pantalla principal de la app
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: screenNames.HomeDrawer }],
        })
      );
    }
    if (authenticationState === "Unauthenticated") {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: screenNames.LoginScreen }],
        })
      );
    }
  }, [authenticationState]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Pantalla de Carga puede ser personalizada de la forma que se quiera */}
      <Stack.Screen
        name={screenNames.LoadingScreen}
        component={LoadingScreen}
      />
      <Stack.Screen name={screenNames.HomeDrawer} component={HomeDrawer} />
      <Stack.Screen name={screenNames.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};
