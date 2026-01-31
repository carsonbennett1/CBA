import './App.css'
import './styles/HomePage.css'
import { Route, Routes } from 'react-router-dom'
import AddBook from './pages/AddBook'
import Home from './pages/HomePage'
import { ToastContainer } from 'react-toastify'
import DeleteBook from './pages/DeleteBook'

function App() {
  return (
    <>
      <main>
        <nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/delete' element={<DeleteBook />} />
          </Routes>
        </nav>
        <div>
          <ToastContainer position='top-right' />
        </div>
      </main>
    </>
  )
}

export default App
