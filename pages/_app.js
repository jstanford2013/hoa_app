import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div style={{display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column"}}>
       <img src={'/hoa_logo.png'} alt="this is car image" style={{justifyItems: "center"}} />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
