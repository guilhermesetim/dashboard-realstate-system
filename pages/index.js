import BasicTabs from "./nav-tab";
import PersistentDrawerLeft from "./nav-aside";
import StickyHeadTable from './list-house';




export default function HomePage() {
  return (
  
  <>
    
    {PersistentDrawerLeft()}
    {/*BasicTabs()*/}
    {StickyHeadTable()}

    
    
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