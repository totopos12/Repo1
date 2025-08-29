'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import "../../styles/button.css";

export function Button1() {
  return <Button onClick={melapelas} variant="contained" className="button1">Level 1</Button>;
  };

export function Button2(){
    return <Button variant='contained' className="button1">Level 2</Button>;
}


export function Button3(){
    return <Button variant='contained' className="button1">Level 3</Button>;
}
 
function melapelas() {
  console.log('el mono me la pela'); 
}


export default Button1;