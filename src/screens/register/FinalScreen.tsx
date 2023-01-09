import { StyleSheet, Text, View } from "react-native";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const FinalScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});