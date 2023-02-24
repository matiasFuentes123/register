import { FC, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  text: string
  onChange: (value: Boolean) => void;
} & TouchableOpacityProps;

export const CustomCheckBox: FC<Props> = ({ onChange,...props }) => {
  const [active, setActive] = useState<Boolean>(false)
  const changeActive = () => {
    setActive(!active)
  }
  useEffect(() => {
    onChange(active)
  }, [active])
  
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity style={styles.button} {...props} onPress={changeActive}>
        {
          active ? 
          <View style={styles.checked}></View>
          :
          <></>
        }
        
      </TouchableOpacity>
      <Text style={styles.text}>{props.text}</Text>
    </View>
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
  },
  text: {
    color: "#fff",
    paddingLeft: 5
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  }
});
