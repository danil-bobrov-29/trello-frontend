export interface IRegisterForm {
  firstName: string
  surname: string
  email: string
  password: string
  passwordConfirmation: string
}

export type TRegisterData = Omit<IRegisterForm, 'passwordConfirmation'>

export type TLoginForm = Pick<IRegisterForm, 'email' | 'password'>
