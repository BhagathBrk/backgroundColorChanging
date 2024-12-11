
import { useState } from 'react'
import './App.css'

function App() {


    const [color, setColor] = useState("white")
  

  return (
    <>
    <h2 className='text-white'>Background Color changer</h2>
    <div className='mb-5 mt-4 rounded' style={{height:"350px", width:"350px", backgroundColor: color}}>
      
    </div>
    <button onClick={()=>setColor("green")} className='btn btn-success me-2'>Green</button>
      <button onClick={()=>setColor("red")} className='btn btn-danger mx-2'>Red</button>
      <button onClick={()=>setColor("blue")} className='btn btn-primary mx-2'>Blue</button>
      <button onClick={()=>setColor("yellow")} className='btn btn-warning ms-2'>Yellow</button>
    </>
  )
}


export default App
