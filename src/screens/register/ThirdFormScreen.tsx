import { StyleSheet, Text, View, Image } from "react-native";
import { FC, ReactNode } from "react";
import { CustomButton } from '../../components/CustomButton'
import { RegisterLayout } from '../../layouts/RegisterLayout'
import { StackScreenProps } from "@react-navigation/stack";
import { screenNames } from '../../constants/screenNames'
import { CustomCheckBox } from '../../components/CustomCheckBox'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  setThirdForm
} from "../../redux/features/excersise/excersiseSlice";

import { AppDispatch } from "../../redux/store/store";
import { ThirdFormState } from '../../redux/features/excersise/ExcerciseTypes'

interface Props extends StackScreenProps<any> {}
export const ThirdFormScreen: FC<Props> = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { navigation, ...other } = props;
  const navigateToSecondFormScreen = () => {
    navigation.navigate(screenNames.SecondFormScreen)
  }
  const navigateToFinalScreen = () => {
    navigation.navigate(screenNames.FinalScreen)
  }
  const {
    values,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      pushNotification: false,
      runInTheBackground: false,
      hideMyName: false,
    },
    onSubmit: (values) => sendThirdFormToStore(values),
    validateOnBlur: false,
    validateOnChange: false
  });
  const submit = () => handleSubmit();

  const sendThirdFormToStore = (thirdForm: ThirdFormState) => {
    dispatch(setThirdForm(thirdForm))
    navigateToFinalScreen()
  }
  return (
    <RegisterLayout>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <View style={styles.textField}>
            <CustomCheckBox onChange={(value: Boolean) => setFieldValue("pushNotification", value)} text="Notificaciones push"/>
          </View>
          <View style={styles.textField}>
            <CustomCheckBox onChange={(value: Boolean) => setFieldValue("runInTheBackground", value)} text="Funcionar en 2do plano"/>
          </View>
          <View style={styles.textField}>
            <CustomCheckBox onChange={(value: Boolean) => setFieldValue("hideMyName", value)} text="Ocultar mi nombre"/>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton text="Volver" onPress={navigateToSecondFormScreen} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton text="Siguiente" onPress={submit} />
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
  checkboxContainer: { flex: 1, justifyContent: "center", alignItems: "flex-start", width: "100%" },
  textField: { paddingTop: 5, paddingBottom: 5 }
});