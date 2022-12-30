import { FC, ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const AuthLayout: FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGray,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
});
