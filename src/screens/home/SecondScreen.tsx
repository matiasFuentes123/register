import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {} & NativeStackScreenProps<any>;

export const SecondScreen: FC<Props> = ({ route }) => {
  const params = route.params;

  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Text>Mensaje: {params?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
