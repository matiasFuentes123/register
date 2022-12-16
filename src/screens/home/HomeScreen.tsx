import { StyleSheet, Text, View } from "react-native";
import { FC, ReactNode } from "react";

type Props = {};

export const HomeScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
