import { RouterProvider } from 'react-router-dom'

import { Providers } from '@/app/providers.tsx'
import { router } from '@/app/routes/routes.tsx'

const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
export default App
