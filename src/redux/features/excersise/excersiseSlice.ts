import { createSlice } from "@reduxjs/toolkit";
import {
  ExcersiseState,
  FirstFormState,
  SecondFormState,
  ThirdFormState
} from './ExcerciseTypes'
import { AppThunk } from "../../store/store";
import { saveExcersise } from '../../../services/firestore/excersise'
// Esado inciai de Store
const initialState: ExcersiseState = {
  email: '',
  password: '',
  name: '',
  lastName: '',
  rut: '',
  pushNotification: false,
  runInTheBackground: false,
  hideMyName: false,
  loading: false
};

export const excersiseSlice = createSlice({
  name: "excercise",
  initialState,
  reducers: {
    setFirstForm: (state, { payload }: { payload: FirstFormState }) => {
      state.email = payload.email
      state.password = payload.password
    },
    setSecondForm: (state, { payload }: { payload: SecondFormState }) => {
      state.name = payload.name
      state.lastName = payload.lastName
      state.rut = payload.rut
    },
    setThirdForm: (state, { payload }: { payload: ThirdFormState }) => {
      state.pushNotification = payload.pushNotification
      state.runInTheBackground = payload.runInTheBackground
      state.hideMyName = payload.hideMyName
    },
    setLoading: (state, { payload }: { payload: boolean }) => {
      state.loading = payload
    },
  },
});
export const createExcersise =
	(excersise: ExcersiseState, then?: VoidFunction): AppThunk =>
	async (dispatch) => {
		dispatch(excersiseSlice.actions.setLoading(true));
		try {
			await saveExcersise(excersise);
		} catch (error) {
			console.error(error);
			alert(error);
		}
    dispatch(excersiseSlice.actions.setLoading(false));
		then?.();
	};

export const { setFirstForm, setSecondForm, setThirdForm } = excersiseSlice.actions;

export default excersiseSlice.reducer;
