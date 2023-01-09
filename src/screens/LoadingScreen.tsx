import { FC, ReactNode } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
// import { AuthLayout } from "../layouts/RegisterLayout";


type Props = {
  children?: ReactNode;
};

export const LoadingScreen: FC<Props> = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { height: 100, width: 100, resizeMode: "contain" },
  loadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "100%",
  },
  text: {
    marginLeft: 10,
    color: "white",
    // fontFamily: "Medium",
  },
});
