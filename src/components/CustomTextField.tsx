import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";

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
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Icon ? (
        <View style={{ marginRight: 0 }}>{<Icon color={"black"} />}</View>
      ) : null}
      <TextInput style={[styles.textInput, style]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  textInput: {
    height: 48,
    paddingHorizontal: 12,
  },
});
