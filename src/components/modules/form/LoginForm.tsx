import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import Button from '@/components/ui/Button.tsx'
import Field from '@/components/ui/Field.tsx'
import { DASHBOARD_PAGES } from '@/config/page.config.ts'
import { authService } from '@/services/auth.service.ts'
import type { TLoginForm } from '@/types/auth.types.ts'
import { useMutation } from '@tanstack/react-query'

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm<TLoginForm>({
    mode: 'onChange',
  })

  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: TLoginForm) =>
      authService.main<TLoginForm>('login', data),
    onError: (error) => {
      console.log(error)
    },
    onSuccess() {
      reset()
      navigate(DASHBOARD_PAGES.HOME)
    },
  })

  const onSubmit = (data: TLoginForm) => {
    mutate(data)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Field
        label="Email"
        id="login-email"
        name="email"
        register={register}
        placeholder="Введите email"
      />
      <Field
        label="Пароль"
        id="login-password"
        name="password"
        type="password"
        register={register}
        placeholder="Введите пароль"
      />
      <Button type="submit" isLoading={isPending}>
        Войти
      </Button>
    </form>
  )
}
export default LoginForm
