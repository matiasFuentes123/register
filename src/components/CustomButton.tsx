import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  text: string;
} & TouchableOpacityProps;

export const CustomButton: FC<Props> = ({ text, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 20,
    backgroundColor: Colors.primary,
    width: "100%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
