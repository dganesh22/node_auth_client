import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/default/Header'
import Footer from './components/default/Footer'
import Home from './components/default/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import AdminDashboard from './components/admin/AdminDashboard'
import UserDashboard from './components/user/UserDashboard'
import Pnf from './components/default/Pnf'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './Auth/PrivateRoute'
import { AuthContext } from './Context/AuthContext'

function App() {
  const context = useContext(AuthContext)
  const isLogin = context.isLogin

  return (
    <BrowserRouter>
          <Header/>
          <ToastContainer autoClose={4000} position={'top-right'} />
            <Routes>
               <Route element={<PrivateRoute/>}>
                    <Route path={`/`} element={<Home/>} />
                    <Route path={`/admin/dashboard`} element={<AdminDashboard/>} />
                    <Route path={`/user/dashboard`} element={<UserDashboard/>} />
               </Route>

                <Route path={`/login`} element={isLogin? <Navigate to={`/`}/> : <Login/>} />
                <Route path={`/register`} element={isLogin? <Navigate to={`/`}/> : <Register/>} />
                <Route path={`/*`} element={<Pnf/>} />
            </Routes>
          <Footer/>
    </BrowserRouter>
  )
}

export default App
