import { firestore } from "../../configs/firebase";
import { ExcersiseState } from "../../redux/features/excersise/ExcerciseTypes";
export const saveExcersise = async (excersise: ExcersiseState) => {
    await firestore.collection("Ejercicio-2-matias").add(excersise);
};