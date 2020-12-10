import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue =`#${hexColor}`
  useEffect(() => {
const timeout = setTimeout(() => {
  setAlert(false)
},3000)
return () => clearTimeout(timeout)


  },[alert])

  return(
     <article id="zoom" className={`color $`} style={{ backgroundColor :
      `rgb(${bcg})`  }}
      onClick = {() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      >
     <p className="percent-value"> {weight}% </p>
     <p className="color-value"> {hexColor} </p>
     {alert && <p>copied to clipboard </p>}

     </article>)
}

export default SingleColor
