import { StyleSheet, View } from "react-native";
import { FC } from "react";
import { CustomButton } from '../../components/CustomButton'
import { RegisterLayout } from '../../layouts/RegisterLayout'
import { StackScreenProps } from "@react-navigation/stack";
import { screenNames } from '../../constants/screenNames'
import { CustomTextField } from '../../components/CustomTextField'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  setFirstForm
} from "../../redux/features/excersise/excersiseSlice";

import { AppDispatch } from "../../redux/store/store";
import { FirstFormState } from '../../redux/features/excersise/ExcerciseTypes'

interface Props extends StackScreenProps<any> {}
export const FirstFormScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  
  const dispatch = useDispatch<AppDispatch>();

  const navigateToSecondFormScreen = () => {
    navigation.navigate(screenNames.SecondFormScreen)
  }
  const navigateToStartScreen = () => {
    navigation.navigate(screenNames.StartScreen)
  }
  const {
    values,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => sendFirstFormToStore(values),
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Ingrese email válido")
        .max(255)
        .required("Email es requerido"),
      password: Yup.string()
        .min(6, 'La constraseña debe tener como minimo 6 caracteres')
        .max(255)
        .required("Contraseña es requerida"),
      repeatPassword: Yup.string()
        .max(255)
        .oneOf([Yup.ref("password"), null], "Ambas constraseñas deben coincidir")
        .required("Repetir contraseña es requerido"),
    }),
  });

  const submit = () => handleSubmit();

  const sendFirstFormToStore = (firstForm: FirstFormState) => {
    dispatch(setFirstForm(firstForm))
    navigateToSecondFormScreen()
  }

  return (
    <RegisterLayout>
      <View style={styles.container}>
        <View style={styles.textFieldsContainer}>
          <View style={styles.textField}>
            <CustomTextField
              value={values.email}
              onChangeText={(newString: string) =>
                setFieldValue("email", newString)
              }
              placeholder="Email"
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email && errors.email}
            />
          </View>
          <View style={styles.textField}>
            <CustomTextField
              value={values.password}
              onChangeText={(newString: string) =>
                setFieldValue("password", newString)
              }
              placeholder="Contraseña"
              error={touched.password && Boolean(errors.password)}
              helperText={errors.password && errors.password}
              secureTextEntry
            />
          </View>
          <View style={styles.textField}>
            <CustomTextField
              value={values.repeatPassword}
              onChangeText={(newString: string) =>
                setFieldValue("repeatPassword", newString)
              }
              placeholder="Repetir constraseña"
              error={touched.repeatPassword && Boolean(errors.repeatPassword)}
              helperText={errors.repeatPassword && errors.repeatPassword}
              secureTextEntry
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton text="Volver" onPress={navigateToStartScreen} />
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
  textFieldsContainer: { flex: 1, justifyContent: "center" },
  textField: { paddingTop: 5, paddingBottom: 5 }
});