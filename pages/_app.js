import PersistentDrawerLeft from "./components/nav-aside";

function GlobalStyle(){
    return (
      <style global jsx>{`
  
      * {
      margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        list-style: none;
        font-size: 100%;
        text-decoration: none;
      }
      
  
      a {color: inherit;}  
      `}
      </style>
    )
  }




export default function MyApp({ Component, pageProps }) {
    return (
    <>
        <GlobalStyle />
        <PersistentDrawerLeft />
        <Component {...pageProps} />
    </>
    
    )
  }

