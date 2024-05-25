import React from 'react'
import Main from './components/Main'
import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Container>
    <Main />
    <ToastContainer />
  </Container>
  )
}

export default App
