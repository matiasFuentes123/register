import { StyleSheet, Text, View, Image } from "react-native";
import { FC, ReactNode } from "react";
import { CustomButton } from '../../components/CustomButton'
import { RegisterLayout } from '../../layouts/RegisterLayout'
import { StackScreenProps } from "@react-navigation/stack";
import { screenNames } from '../../constants/screenNames'
import { CustomTextField } from '../../components/CustomTextField'
import { CustomCheckBox } from '../../components/CustomCheckBox'

interface Props extends StackScreenProps<any> {}
export const ThirdFormScreen: FC<Props> = (props: Props) => {
  const { navigation, ...other } = props;
  const navigateToSecondFormScreen = () => {
    navigation.navigate(screenNames.SecondFormScreen)
  }
  const navigateToFinalScreen = () => {
    navigation.navigate(screenNames.FinalScreen)
  }
  return (
    <RegisterLayout>
      <View style={styles.container}>
        <View style={styles.textFieldsContainer}>
          <View style={styles.textField}>
            <CustomCheckBox />
          </View>
          <View style={styles.textField}>
            <CustomTextField placeholder="Contraseña" />
          </View>
          <View style={styles.textField}>
            <CustomTextField placeholder="Repetir constraseña" />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton text="Volver" onPress={navigateToSecondFormScreen} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton text="Siguiente" onPress={navigateToFinalScreen} />
          </View>
        </View>
      </View>
    </RegisterLayout>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: { 
    alignItems: "center", 
    justifyContent: "center", 
    flexDirection: "row",
    width: "53%",
 },
  buttonContainer: { padding: 10, width: "100%" },
  textFieldsContainer: { flex: 1, justifyContent: "center" },
  textField: { paddingTop: 5, paddingBottom: 5 }
});