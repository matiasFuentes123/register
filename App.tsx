import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { MainStack } from "./src/navigation/MainStack";
import { store } from "./src/redux/store/store";
import { Colors } from "./src/constants/colors";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Aqui se Carga el Store de Redux */}
      <Provider store={store}>
        {/* Aqui se coloca la navagacion */}
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
    backgroundColor: Colors.background
  },
});
