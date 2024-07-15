import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css'
import Registration from './Registration'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword.jsx'
import ResetPassword from './ResetPassword.jsx'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/reset_password/:id/:token' element={<ResetPassword/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
