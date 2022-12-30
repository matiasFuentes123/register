import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { MainStack } from "./src/navigation/MainStack";
import { store } from "./src/redux/store/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
