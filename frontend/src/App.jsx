import './App.css'
import './styles/HomePage.css'
import { Route, Routes } from 'react-router-dom'
import AddBook from './pages/AddBook'
import Home from './pages/HomePage'
import { ToastContainer } from 'react-toastify'
import DeleteBook from './pages/DeleteBook'
import UpdateBook from './pages/UpdateBook.jsx'
import Demo from './pages/Demo.jsx'
import Register from './pages/Register.jsx'
import SignIn from './pages/SignIn.jsx'

function App() {
  return (
    <>
      <main>
        <nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/delete' element={<DeleteBook />} />
            <Route path='/update' element={<UpdateBook />} />
            <Route path='/playground' element={<Demo />} />
            <Route path='/register' element={<Register />} />
            <Route path='signIn' element={<SignIn />}/>
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
