import AuthForm from '@/components/modules/auth/AuthForm.tsx'
import AuthHero from '@/components/modules/auth/AuthHero.tsx'

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-white flex">
      <AuthHero />
      <AuthForm />
    </div>
  )
}

export default AuthPage
