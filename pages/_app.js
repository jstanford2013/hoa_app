import '../styles/globals.css'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return(
    <div style={{display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column"}}>
      <Image
      alt="Mountains"
      src="/hoa_logo.png"
      layout="responsive"
    />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
