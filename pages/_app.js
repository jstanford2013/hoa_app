import '../styles/globals.css'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
 
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
   
  useEffect(() => {
    window.addEventListener('resize', setDimension);
     
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return(
    <div style={{display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column"}}>
      <Image
      alt="Mountains"
      src="/hoa_logo.png"
      layout="intrinsic"
      width={(screenSize.dynamicWidth * .25)}
      height={(screenSize.dynamicHeight * .25)}
    />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
