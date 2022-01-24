import BasicTabs from "./components/nav-tab";
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

    body {
      background-color: #EEEEEE;
    }

    a {color: inherit;}  
    `}
    </style>
  )
}

export default function HomePage() {
  return (
  
  <>
    <GlobalStyle/>
    {PersistentDrawerLeft()}
    {BasicTabs()}


    
    
  </>
  
  )
}



function received(){
    <>
      <div>
        <h3>Recebimento</h3>

      </div>
      <div>
        <h3>Taxa de administração</h3>

      </div>
    </>
}