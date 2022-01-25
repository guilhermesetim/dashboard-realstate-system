import NavTabs from './nav-dash';
import StickyHeadTable from './data-realstate'
import StandardImageList from './components/calendar';
import UnstyledTabsCustomized from './nav-tab2';



export default function HomePage() {
  return (
  
  <>
    
    
    {/*NavTabs()*/}
    {UnstyledTabsCustomized(<StandardImageList/>,'segundo conteudo',<StickyHeadTable/>)}
    
    

    
    
  </>
  
  )
}

