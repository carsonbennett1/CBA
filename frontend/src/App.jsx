import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddBook from './pages/AddBook'
import Home from './pages/HomePage'

function App() {
  return (
    <>
      <main>
        <nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddBook />} />
          </Routes>
        </nav>
      </main>
    </>
  )
}

export default App
