import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { FC, ReactNode, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { CustomButton } from "../../components/CustomButton";
import { CustomTextField } from "../../components/CustomTextField";
import { AuthLayout } from "../../layouts/RegisterLayout";
import { setInitialLogIn, signIn } from "../../redux/features/auth/authSlice";
import { AuthState } from "../../redux/features/auth/AuthTypes";
import { AppDispatch, RootState } from "../../redux/store/store";

type Props = {
  children?: ReactNode;
};

export const LoginScreen: FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { logIn } = useSelector<RootState, AuthState>((state) => state.auth);

  useEffect(() => {
    console.log(logIn);
    if (logIn.state === "Failure") {
      Alert.alert("Ha ocurrido un error", logIn.error, [
        {
          onPress: () => {
            dispatch(setInitialLogIn());
          },
          text: "Aceptar",
        },
      ]);
    }
  }, [logIn]);

  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values) => {
      dispatch(
        signIn({
          email: values.Email,
          password: values.Password,
        })
      );
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
      <CustomButton
        text="Ingresar"
        onPress={() => {
          handleSubmit();
        }}
      />

      <View style={styles.separatorWrapper}>
        <View style={styles.line} />
        <Text style={{ marginHorizontal: 5 }}> O Continuar con</Text>
        <View style={styles.line} />
      </View>
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
  separatorWrapper: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  line: {
    flex: 1,
    backgroundColor: "gray",
    height: 2,
  },
});
