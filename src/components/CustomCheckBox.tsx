import { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native";
import { Colors } from "../constants/colors";

type Props = {
} & TouchableOpacityProps;

export const CustomCheckBox: FC<Props> = ({ ...props }) => {
  const [active, setActive] = useState<Boolean>(false)
  const changeActive = () => {
    setActive(!active)
  }
  return (
    <TouchableOpacity style={styles.button} {...props} onPress={changeActive}>
      {
        active ? 
        <View style={styles.checked}></View>
        :
        <></>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: Colors.primary,
  },
  checked: {
    width: 30,
    height: 30,
    backgroundColor: Colors.primary
  }
});
