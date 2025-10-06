import { Activity, useState } from 'react'

import LoginForm from '@/components/modules/form/LoginForm.tsx'
import RegisterForm from '@/components/modules/form/RegisterForm.tsx'
import Button from '@/components/ui/Button.tsx'
import Logo from '@/components/ui/Logo.tsx'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
      <div className="mx-auto justify-center w-full max-w-sm lg:w-96">
        <div className="min-lg:hidden py-5">
          <Logo />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Вход в аккаунт' : 'Создать аккаунт'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
            <Button onClick={() => setIsLogin(!isLogin)} mode="transparent">
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </Button>
          </p>
        </div>
        <div className="mt-8">
          <Activity mode={isLogin ? 'visible' : 'hidden'}>
            <LoginForm />
          </Activity>
          <Activity mode={isLogin ? 'hidden' : 'visible'}>
            <RegisterForm />
          </Activity>
        </div>
      </div>
    </div>
  )
}
export default AuthForm
