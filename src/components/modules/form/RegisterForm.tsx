import { useForm } from 'react-hook-form'

import { useState } from 'react'

import Button from '@/components/ui/Button.tsx'
import Field from '@/components/ui/Field.tsx'
import { authService } from '@/services/auth.service.ts'
import type { IRegisterForm, TRegisterData } from '@/types/auth.types.ts'
import type { IErrorResponse } from '@/types/error.types.ts'
import { useMutation } from '@tanstack/react-query'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const [error, setError] = useState<string>('')

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IRegisterForm) =>
      authService.main<TRegisterData>('register', {
        firstName: data.firstName,
        surname: data.surname,
        email: data.email,
        password: data.password,
      }),
    onError: (error: IErrorResponse) => {
      if (error.message === 'Email already exists' && error.status === 409) {
        setError('Пользователь уже существует')
      } else {
        setError(error.message)
      }
    },
    onSuccess() {
      setError('')
      reset()
    },
  })

  const onSubmit = (data: IRegisterForm) => {
    mutate(data)
  }

  const watchPassword = watch('password')

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Field<IRegisterForm>
        label="Имя"
        id="name"
        name="firstName"
        register={register}
        placeholder="Введите имя"
        errorMessage={errors.firstName?.message}
        options={{
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
          minLength: {
            value: 2,
            message: 'Имя должно быть больше одного символа',
          },
        }}
      />
      <Field<IRegisterForm>
        label="Фамилия"
        id="surname"
        name="surname"
        register={register}
        placeholder="Введите фамилию"
        errorMessage={errors.surname?.message}
        options={{
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
        }}
      />
      <Field<IRegisterForm>
        label="Email"
        id="register-email"
        name="email"
        register={register}
        placeholder="Введите email"
        errorMessage={errors.email?.message || error}
        options={{
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
        }}
      />
      <Field<IRegisterForm>
        label="Пароль"
        id="register-password"
        name="password"
        type="password"
        register={register}
        placeholder="Введи пароль"
        errorMessage={errors.password?.message}
        options={{
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
          minLength: {
            value: 8,
            message: 'Пароль должен быть минимум 8 символов',
          },
        }}
      />
      <Field<IRegisterForm>
        label="Повторите пароль"
        id="password-confirmation"
        name="passwordConfirmation"
        type="password"
        register={register}
        placeholder="Повторите пароль"
        errorMessage={errors.passwordConfirmation?.message}
        options={{
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
          validate: (value) => value === watchPassword || 'Пароли не совпадают',
        }}
      />
      <Button type="submit" isLoading={isPending}>
        Зарегистрироваться
      </Button>
    </form>
  )
}
export default RegisterForm
