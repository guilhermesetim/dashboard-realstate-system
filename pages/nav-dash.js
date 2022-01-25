import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {useRouter} from 'next/router';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);

    
    switch(newValue){
      case 0:
        /*useRouter().push('./index');*/
        break;
      case 1:
        /*useRouter().push('./report');*/
        break;
      case 2:
        useRouter().push('./data-realstate');
        break;
    }
    
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Avisos do dia" href="/index" />
        <LinkTab label="Relatório" href="/report" />
        <LinkTab label="Informações" href="data-realstate" />
      </Tabs>
    </Box>
  );
}