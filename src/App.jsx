import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PageOne } from './pages/Page-one'
import { PageTwo } from './pages/Page-two'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageOne/>} />
        <Route path='/pagetwo' element={<PageTwo/>} />
      </Routes>
    </div>

  )
}

export default App
