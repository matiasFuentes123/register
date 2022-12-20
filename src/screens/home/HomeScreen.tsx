import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screenNames } from "../../constants/screenNames";

type Props = {} & NativeStackScreenProps<any>;

export const HomeScreen: FC<Props> = ({ navigation, route }) => {
  const navigateSecondScreen = () => {
    navigation.navigate(screenNames.SecondScreen, {
      message: "Hola de la primera pantalla",
    });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={navigateSecondScreen} style={styles.button}>
        <Text style={styles.text}>Ir a Segunda Pantalla</Text>
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
