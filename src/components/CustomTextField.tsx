import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Colors } from '../constants/colors'
type Props = {
  icon?: FC<{ color: string }>;
  containerStyle?: StyleProp<ViewStyle>;
  error?: boolean;
  helperText?: string;
} & TextInputProps;

export const CustomTextField: FC<Props> = ({
  icon: Icon,
  containerStyle,
  style,
  helperText,
  error,
  ...props
}) => {
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        {Icon ? (
          <View style={{ marginRight: 0 }}>{<Icon color={"black"} />}</View>
        ) : null}
        <TextInput style={[styles.textInput, style]} {...props} placeholderTextColor={Colors.text} />
      </View>
    {helperText !== "" && error && (
        <Text style={{ color: "red" }}>{helperText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.textInput,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.text
  },
  textInput: {
    height: 48,
    paddingHorizontal: 12,
    width: "100%",
    color: "#fff"
  },
});
