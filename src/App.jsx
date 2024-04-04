import { useState } from 'react'
import './App.css'
import Friends from './components/Friends'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>

<ToastContainer />
      <Friends />
     


    </>
  )
}

export default App
