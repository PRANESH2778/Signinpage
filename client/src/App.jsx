import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Signinpage from './Signinpage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signin' element={<Signinpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App