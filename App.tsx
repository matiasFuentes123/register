import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { MainStack } from "./src/navigation/MainStack";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
