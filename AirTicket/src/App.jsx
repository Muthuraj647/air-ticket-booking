import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex gap-3'>
        <Sidebar/>
        <div className="main-container p-3">
          <Main/>
        </div>
      </div>
      
    </>
  )
}

export default App
