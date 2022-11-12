import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { PageOne } from './pages/Page-one'


function App() {

  return (
    <div className="App">
      <PageOne/>
      {/* <Navbar/> */}
    </div>

  )
}

export default App
