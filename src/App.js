
import './App.css';
import React from 'react'
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import Clock from 'react-live-clock';

const initialState = {
  timezone:  'Canada/Central'
}

const reducer = (state,action) => {

  switch(action.type) {
    default: 
      return {timezone: 'Canada/Central'}

    case "America/New_York":
      return {timezone:"America/New_York" }

    case "US/Pacific":
      return {timezone:"US/Pacific" }

    case "US/Central":
      return {timezone:"US/Central"}
      

  }

}

function App() {

  const [state,dispatch] = React.useReducer(reducer,initialState)
  const [color,setColor] =  React.useState('white')




  return (
    <>
    <div className='masterContainer'>

    <div className='masterContainer_top' >


    <Clock style={{color:color}} className='masterContainer_top_clock' format={'HH:mm:ss'} ticking={true} timezone={state.timezone} />
    <p style={{color:color}}   className='masterContainer_top_p'>{state.timezone}</p>
    </div>
  
    <div className='masterContainer_bottom' >

    <Stack className="masterContainer_bottom_buttons" direction="row" spacing={2}>
      <Button onClick={() => {dispatch({type: "America/New_York"})}} variant="contained" >America/New_York</Button>
      <Button onClick={() => {dispatch({type: "US/Pacific"})}} variant="contained" color="success">US/Pacific</Button>
      <Button onClick={() => {dispatch({type: "US/Central"})}} variant="contained" color="error">US/Central</Button>
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
