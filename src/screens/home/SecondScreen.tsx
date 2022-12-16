import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const SecondScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
