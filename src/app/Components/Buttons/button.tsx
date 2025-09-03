'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import "../../styles/button.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function Button1() {
  return <Button onClick={Level1} variant="contained" className="button1">Level 1</Button>;
  };

export function Button2(){
    return <Button onClick={Level2} variant='contained' className="button1">Level 2</Button>;
}


export function Button3(){
    return <Button onClick={Level3} variant='contained' className="button1">Level 3</Button>;
}

export function TurnOff(){
  return <Button onClick={Turnoff} variant='contained' className='button1'>Turn Off</Button> 
}

export function SelectTemp() {
  const [Temp, setTemp] = React.useState<number | undefined>();

  const handleChange = (event: SelectChangeEvent) => {
    const Temp = (Number(event.target.value));
    setTemp(Temp);
    TempSelect(Temp);
  };

  return (
    <Box sx={{ minWidth: 250 }} className="select-temp">
      <FormControl fullWidth>
        <InputLabel style={{color:'white', fontSize:"large"}} id="demo-simple-select-label">Encender a temperatura</InputLabel>
        <Select style={{color:"white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={Temp?.toString() ?? ''}
          onChange={handleChange}
        >
          <MenuItem onClick={() => {TempSelect(23)}} value={23}>23+</MenuItem>
          <MenuItem onClick={() => {TempSelect(26)}} value={26}>26+</MenuItem>
          <MenuItem onClick={() => {TempSelect(29)}} value={29}>29+</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
 
function Level1(): void{
  document.documentElement.style.setProperty('--animation-duration', '.8s');
}

function Level2(): void{
  document.documentElement.style.setProperty('--animation-duration', '.5s');
}

function Level3(): void{ 
  document.documentElement.style.setProperty('--animation-duration','.3s');
}

function Turnoff(): void{
  document.documentElement.style.setProperty('--animation-duration', '');
}

function TempSelect(value: number): void {
  if (value <= 23) {
    Level1();
  } else if (value <= 26) {
    Level2();
  } else if (value <= 29){
    Level3();
  }
}




export default Button1;



