import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'



const c = new Values('#f15025').all(5) 
const v = new Values('#222222').all(5) 
function App() {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false);
  const [list,setList]  = useState(v,c);

const handleSubmit = (e) => {
  e.preventDefault();
  try{
  let colors = new Values(color).all(5)
  setList(colors)


  } catch (error){
    setError(true)
    console.log(error)
   

  }

}

  return (
    <>
    


  
<div class="zoom"></div>



  <section className="container">
    <h2>color generator project</h2> <br/>
  
  </section>

  <section className="container">
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025"  className={`${error ? 'error' : null}`}/>
      
      <button className="btn" type="submit">submit</button>

    </form>
  </section>



  <section className="colors">
    {list.map((color,index) =>{
      return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
    })}

  </section>
  <footer className="footer">
    <div className="d">
      made with love
    </div>
  </footer>
  </>
  )
}

export default App
