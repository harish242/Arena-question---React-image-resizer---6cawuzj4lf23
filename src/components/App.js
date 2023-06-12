import React,{useState} from 'react'
import '../styles/App.css';
import images from '../image.jpeg'

const App = () => {
  const[height,setHeight]=useState(320)
  const[width,setWidth]=useState(320)
  return (
    <div id="main">
       <img id='resizable-img' src={images} style={{height:`${height}px`,width:`${width}px`}} /><br/><br/>
       <input type='range' min='100' max='800' id='height-slider' onChange={(event)=>setHeight(event.target.value)} />
       <input type='range' min='100' max='800' id='width-slider' onChange={(event)=>setWidth(event.target.value)} />
    </div>
  )
}


export default App;
