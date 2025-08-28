import * as React from 'react';
import Button from '@mui/material/Button';
import "./button.css";

export function Button1() {
  return <Button variant="contained" className='boton' style={{backgroundColor:"red", marginTop:"30%", marginInline:"10%"}}>Level 1</Button>;
  }

export default Button1;

export function Button2(){
    return <Button variant='contained' className="boton" style={{backgroundColor:"red", marginTop:"30%", marginInline:"10%"}}>Level 2</Button>;
}


export function Button3(){
    return <Button variant='contained' className="boton" style={{backgroundColor:"red", marginTop:"30%", marginInline:"10%"}}>Level 3</Button>;
}
