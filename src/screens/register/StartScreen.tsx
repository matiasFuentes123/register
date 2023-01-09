import { StyleSheet, Text, View, Image } from "react-native";
import { FC, ReactNode } from "react";
import { CustomButton } from '../../components/CustomButton'
import { RegisterLayout } from '../../layouts/RegisterLayout'
import { StackScreenProps } from "@react-navigation/stack";
import { screenNames } from '../../constants/screenNames'
// type Props = {
//   children?: ReactNode;
// };
interface Props extends StackScreenProps<any> {}
export const StartScreen: FC<Props> = (props: Props) => {
  const { navigation, ...other } = props;
  const navigateToFirstFormScreen = () => {
    navigation.navigate(screenNames.FirstFormScreen)
  }
  return (
    <RegisterLayout>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.catContainer}>
            <Image style={styles.cat} source={ require('../../image/favpng_dog-and-cat.png') }></Image>
          </View>
        </View>
        <View style={styles.subContainer}>
          <CustomButton text="Registrarme" onPress={navigateToFirstFormScreen} />
        </View>
      </View>
    </RegisterLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center",  },
  subContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  cat: { height: 60, width: 60, tintColor: "#fff" },
  catContainer: { height: 80, width: 80, backgroundColor: "#134074", borderRadius: 80, justifyContent: "center", alignItems: "center" },
});