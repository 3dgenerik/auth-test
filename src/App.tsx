import React from 'react';
import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/'>
      <Route element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path='register' index element={<Register/>} />
        <Route path='login' index element={<Login/>} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <Toaster position='top-center' toastOptions={{duration:3000}}/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
