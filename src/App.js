
import './App.css';
import React from 'react'
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import Clock from 'react-live-clock';

function App() {

  const [timezone,setTimezone] = React.useState('US/Pacific')
  const [color,setColor] =  React.useState('white')

  return (
    <>
    <div className='masterContainer'>

    <div className='masterContainer_top' >


    <Clock style={{color:color}} className='masterContainer_top_clock' format={'HH:mm:ss'} ticking={true} timezone={timezone} />
    <p style={{color:"white"}}   className='masterContainer_top_p'>{timezone}</p>
    </div>
  
    <div className='masterContainer_bottom' >

    <Stack className="masterContainer_bottom_buttons" direction="row" spacing={2}>
      <Button onClick={() => {setTimezone("America/New_York")}} variant="contained" >America/New_York</Button>
      <Button onClick={() => {setTimezone('US/Pacific')}} variant="contained" color="success">US/Pacific</Button>
      <Button onClick={() => {setTimezone('US/Central')}} variant="contained" color="error">US/Central</Button>
    </Stack>

    <Stack className="masterContainer_bottom_buttons" direction="row" spacing={2}>
    
      <Button  style={{color:"red"}}  onClick={() => {setColor("red")}}>RED</Button>
      <Button  style={{color:"purple"}}  onClick={() => {setColor('purple')}}> PURPLE</Button>
      <Button  style={{color:"blue"}}  onClick={() => {setColor('blue')}}>BLUE</Button>
    </Stack>

    </div>
    
     </div>

     </>
  );
}

export default App;
