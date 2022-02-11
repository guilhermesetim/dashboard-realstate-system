import NavTabs from './nav-dash';
import StickyHeadTable from './data-realstate'
import Deposits from './components/Recebido';
import UnstyledTabsCustomized from './nav-tab2';



export default function HomePage() {
  return (
  
  <>
    
    
    {/*NavTabs()*/}
    {UnstyledTabsCustomized(<Deposits/>,'segundo conteudo',<StickyHeadTable/>)}
    
    

    
    
  </>
  
  )
}

