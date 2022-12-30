import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  children?: ReactNode;
};

export const AuthLayout: FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGray,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
});
