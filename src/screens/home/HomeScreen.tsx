import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { screenNames } from "../../constants/screenNames";
import { singOut } from "../../redux/features/auth/authSlice";
import { AuthState } from "../../redux/features/auth/AuthTypes";
import { AppDispatch, RootState } from "../../redux/store/store";

type Props = {} & NativeStackScreenProps<any>;

export const HomeScreen: FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector<RootState, AuthState>((state) => state.auth);

  const navigateSecondScreen = () => {
    dispatch(singOut());
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{user?.Nombre}</Text>
      <TouchableOpacity onPress={navigateSecondScreen} style={styles.button}>
        <Text style={styles.text}>Cerrar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginTop: 15,
    backgroundColor: "green",
  },
  text: {
    color: "white",
  },
});
