import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { FC, ReactNode, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import * as yup from "yup";
import { CustomButton } from "../../components/CustomButton";
import { CustomTextField } from "../../components/CustomTextField";
import { AuthLayout } from "../../layouts/AuthLayout";

type Props = {
  children?: ReactNode;
};

export const LoginScreen: FC<Props> = () => {
  useEffect(() => {
    // onMount
    return () => {
      // onDestroy
    };
  }, []);

  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values) => {},
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    validationSchema: yup.object().shape({
      Email: yup
        .string()
        .email("Email no válido")
        .required("Email es requerido"),
      Password: yup.string().required("Contraseña es requerido"),
    }),
  });

  return (
    <AuthLayout>
      <Text style={{ fontSize: 18, marginBottom: 20, textAlign: "center" }}>
        Ingreso de usuario
      </Text>

      <CustomTextField
        icon={({ color }) => (
          <MaterialIcons name="email" size={24} color={color} />
        )}
        placeholder="Email"
        containerStyle={{ marginTop: 20 }}
        keyboardType="email-address"
        value={values.Email}
        onChangeText={(newText) => {
          setFieldValue("Email", newText);
        }}
        autoCapitalize="none"
      />
      <CustomTextField
        icon={({ color }) => <Entypo name="key" size={24} color={color} />}
        placeholder="Contraseña"
        containerStyle={{ marginTop: 20 }}
        value={values.Password}
        onChangeText={(newText) => {
          setFieldValue("Password", newText);
        }}
        secureTextEntry
      />
      <CustomButton text="Ingresar" />
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
