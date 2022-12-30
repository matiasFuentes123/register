import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenNames } from "../constants/screenNames";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SecondScreen } from "../screens/home/SecondScreen";

type Props = {};

const Drawer = createDrawerNavigator();

export const HomeDrawer: FC<Props> = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{ headerShown: false }}
      // parametro distinto al Stack que sirve para agregar un componente con el diseño del Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={screenNames.HomeScreen} component={HomeScreen} />
      <Drawer.Screen name={screenNames.SecondScreen} component={SecondScreen} />
    </Drawer.Navigator>
  );
};

// Componente con el diseño del Drawer 
const DrawerContent: FC<DrawerContentComponentProps> = ({ navigation }) => {
// Sirver pra obtener los tamaños de las barras de Android o IOS, sea de navegacion o superior.
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(screenNames.HomeScreen)}
      >
        <Text>Primera Pantalla</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(screenNames.SecondScreen)}
      >
        <Text>Segunda Pantalla</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});
