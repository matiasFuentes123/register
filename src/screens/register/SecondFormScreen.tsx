import { StyleSheet, View } from "react-native";
import { FC } from "react";
import { CustomButton } from '../../components/CustomButton'
import { RegisterLayout } from '../../layouts/RegisterLayout'
import { StackScreenProps } from "@react-navigation/stack";
import { screenNames } from '../../constants/screenNames'
import { CustomTextField } from '../../components/CustomTextField'
import { useFormik } from "formik";
import * as Yup from "yup";
import * as rutJS from "rut.js";
import { useDispatch } from "react-redux";
import {
  setSecondForm
} from "../../redux/features/excersise/excersiseSlice";
import { AppDispatch } from "../../redux/store/store";
import { SecondFormState } from '../../redux/features/excersise/ExcerciseTypes'

interface Props extends StackScreenProps<any> {}
export const SecondFormScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const navigateToThirdFormScreen = () => {
    navigation.navigate(screenNames.ThirdFormScreen)
  }
  const navigateToFirstFormScreen = () => {
    navigation.navigate(screenNames.FirstFormScreen)
  }

  const dispatch = useDispatch<AppDispatch>();

  const {
    values,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      rut: "",
    },
    onSubmit: (values) => sendFirstFormToStore(values),
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(255)
        .required("Nombre es requerido"),
      lastName: Yup.string()
        .max(255)
        .required("Apellido es requerida"),
      rut: Yup.string()
        .required("Rut es requerido")
        .test({
          name: "Rut",
          message: "Rut no válido",
          test: (value) => {
            if (!value) return false;
            return rutJS.validate(value);
          },
        }),
    }),
  });

  const submit = () => handleSubmit();

  const sendFirstFormToStore = (secondForm: SecondFormState) => {
    dispatch(setSecondForm(secondForm))
    navigateToThirdFormScreen()
  }

  return (
    <RegisterLayout>
      <View style={styles.container}>
        <View style={styles.textFieldsContainer}>
          <View style={styles.textField}>
            <CustomTextField
                value={values.name}
                onChangeText={(newString: string) =>
                  setFieldValue("name", newString)
                }
                placeholder="Nombre"
                error={touched.name && Boolean(errors.name)}
                helperText={errors.name && errors.name}
              />
          </View>
          <View style={styles.textField}>
            <CustomTextField
              value={values.lastName}
              onChangeText={(newString: string) =>
                setFieldValue("lastName", newString)
              }
              placeholder="Apellido"
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={errors.lastName && errors.lastName}
            />
          </View>
          <View style={styles.textField}>
            <CustomTextField
              value={values.rut}
              onChangeText={(newString: string) =>
                setFieldValue("rut", rutJS.format(newString))
              }
              placeholder="Rut"
              error={touched.rut && Boolean(errors.rut)}
              helperText={errors.rut && errors.rut}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton text="Volver" onPress={navigateToFirstFormScreen} />
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