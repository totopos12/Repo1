'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import "../../styles/button.css";


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
  return <Button onClick={Turnoff} variant='contained' className='button1'>Turn Off</Button>;
}

export function AutomaticButton() {
  return <Button onClick={() => Automatic(30)} variant="contained" className="button1">Automatic Mode</Button>;
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

function Automatic(value: number): void {
  if (value >= 23){
    document.documentElement.style.setProperty('--animation-duration', '.8s');
  }
}




export default Button1;



