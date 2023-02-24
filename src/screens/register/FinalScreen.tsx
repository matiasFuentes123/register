import { StyleSheet, Text, View } from "react-native";
import { FC, ReactNode } from "react";
import { RegisterLayout } from "../../layouts/RegisterLayout";
import { CustomButton } from '../../components/CustomButton'
import { StackScreenProps } from "@react-navigation/stack";
import { screenNames } from '../../constants/screenNames'

interface Props extends StackScreenProps<any> {}
export const FinalScreen: FC<Props> = (props: Props) => {
  const { navigation, ...other } = props;
  const navigateToStartScreen = () => {
    navigation.navigate(screenNames.StartScreen)
  }
  return (
    <RegisterLayout>
      <View style={styles.container}>
        <Text style={styles.largeText}>Exito</Text>
        <Text style={styles.smallText}>Hemos guardado tus datos</Text>
        <CustomButton text="Siguiente" onPress={navigateToStartScreen} />
      </View>
    </RegisterLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  largeText: { color: "#fff", fontSize: 30 },
  smallText: { color: "#fff", fontSize: 20 }
});