import { useNavigate } from 'react-router'

import Button from '@/components/ui/Button.tsx'
import { authService } from '@/services/auth.service.ts'
import { useMutation } from '@tanstack/react-query'

const Dashboard = () => {
  const { mutate } = useMutation({
    mutationFn: () => authService.logout(),
  })

  const navigate = useNavigate()

  const onLogout = () => {
    mutate()
    navigate('/auth')
  }

  return (
    <div>
      <Button onClick={onLogout}>Выйти</Button>
    </div>
  )
}
export default Dashboard
