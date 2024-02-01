import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ViewPage from './pages/ViewPage'
import RootLayout from './layouts/RootLayout'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />} path='/'>
            <Route element={<HomePage />} path='/'></Route>
            <Route element={<ViewPage />} path='/view'></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
