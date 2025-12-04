'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import '../../styles/button.css';
import { controlPin } from '../../Services/Activate';
import { getTemperature } from '@/app/Services/Temperature';

export function Button1() {
  return (
    <Button onClick={() => handleLevel1()} variant="contained" className="button1">
      Level 1
    </Button>
  );
}

export function Button2() {
  return (
    <Button onClick={() => handleLevel2()} variant="contained" className="button1">
      Level 2
    </Button>
  );
}

export function Button3() {
  return (
    <Button onClick={() => handleBoth(12,13)} variant="contained" className="button1">
      Level 3
    </Button>
  );
}

export function TurnOff() {
  return (
    <Button onClick={() => handleTurnOff()} variant="contained" className="button1">
      Turn Off
    </Button>
  );
}

export function AutomaticButton({}: { temperature: number }) {
  return (
    <Button
      onClick={() => Automatic()}
      variant="contained"
      className="button1"
    >
      Automatic Mode
    </Button>
  );
}

// Level 1: Enciende pin 12, apaga pin 13
const handleLevel1 = async () => {
  const result1 = await controlPin("on", 12);
  const result2 = await controlPin("off", 13);
  Level1();
  console.log("Level 1 - Respuesta ESP pin 12:", result1);
  console.log("Level 1 - Respuesta ESP pin 13:", result2);
};

// Level 2: Enciende pin 13, apaga pin 12
const handleLevel2 = async () => {
  const result1 = await controlPin("off", 12);
  const result2 = await controlPin("on", 13);
  Level2();
  console.log("Level 2 - Respuesta ESP pin 12:", result1);
  console.log("Level 2 - Respuesta ESP pin 13:", result2);
};

// Level 3: Enciende ambos pines
const handleBoth = async (pin: number, pin2: number) => {
  const result1 = await controlPin("on", pin);
  const result2 = await controlPin("on", pin2);
  Level3();
  console.log("Level 3 - Respuesta ESP pin 12:", result1);
  console.log("Level 3 - Respuesta ESP pin 13:", result2);
};

  
// Animaciones
function Level1() {
  document.documentElement.style.setProperty('--animation-duration', '.8s');
}
function Level2() {
  document.documentElement.style.setProperty('--animation-duration', '.5s');
}
function Level3() {
  document.documentElement.style.setProperty('--animation-duration', '.3s');
}
function Turnoff() {
  document.documentElement.style.setProperty('--animation-duration', '');
}

let isAutomatic = false; // bandera de modo automático
let automaticInterval: NodeJS.Timeout | null = null;

function Automatic() {
  // activa el modo automático cada 2 segundos
  isAutomatic = true;
  automaticInterval = setInterval(async () => {
    const value = await getTemperature();
    if (value > 20 && value < 23) {
      Level1();
      handleLevel1();
    } else if (value >= 23 && value < 27) {
      Level2();
      handleLevel2();
    } else if (value >= 27) {
      Level3();
      handleBoth(12, 13);
    }
    console.log("Automatic Mode - Temperature:", value);
  }, 2000);
}

const handleTurnOff = async () => {
  // apaga los pines
  await controlPin("off", 12);
  await controlPin("off", 13);

  // desactiva automático si estaba corriendo
  if (automaticInterval) {
    clearInterval(automaticInterval);
    automaticInterval = null;
  }
  isAutomatic = false;

  // lógica adicional de apagado
  Turnoff();
  console.log("Modo automático desactivado y pines apagados");
};



export default Button1;
