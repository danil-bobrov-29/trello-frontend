import AnimatedCards from '@/components/modules/auth/AnimatedCards.tsx'
import Logo from '@/components/ui/Logo.tsx'

const AuthHero = () => {
  return (
    <div className="max-lg:hidden lg:flex lg:flex-1 lg:flex-col bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden py-12 px-15 gap-y-15">
      <Logo />
      <div className="relative z-10 flex flex-col">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-15">
            Добро пожаловать в{' '}
            <span className="text-blue-500 typing-text">Trello</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Работайте вместе, организуйте задачи и достигайте большего.
            Присоединяйтесь к миллионам команд по всему миру.
          </p>
        </div>
      </div>
      <AnimatedCards />
    </div>
  )
}
export default AuthHero
