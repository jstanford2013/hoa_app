import '../styles/globals.css'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import img from "../public/hoa_logo.png"

function MyApp({ Component, pageProps }) {

  return(
    <div style={{display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column"}}>
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
