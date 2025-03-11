import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { DarkModeProvider } from './context/DarkModeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </DarkModeProvider>
  </StrictMode>,
)
