import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC, memo, ReactNode, useEffect } from "react";
import { CustomTextField } from "../../components/customTextField";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as yup from "yup";
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
    onSubmit: (values) => {

    },
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
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Ingreso de usuario</Text>

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
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginTop: 20,
    backgroundColor: "green",
  },
  text: {
    color: "white",
  },
});
