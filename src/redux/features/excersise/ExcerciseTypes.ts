export type ExcersiseState = {
  email: string,
  password: string,
  name: string,
  lastName: string,
  rut: string,
  pushNotification: boolean,
  runInTheBackground: boolean,
  hideMyName: boolean,
  loading: boolean
};

export type FirstFormState = {
  email: string,
  password: string,
}

export type SecondFormState = {
  name: string,
  lastName: string,
  rut: string,
}

export type ThirdFormState = {
  pushNotification: boolean,
  runInTheBackground: boolean,
  hideMyName: boolean,
}