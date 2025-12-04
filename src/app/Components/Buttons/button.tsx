'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import '../../styles/button.css';
import { controlPin } from '../../Services/Activate';
import { getTemperature } from '@/app/Services/Temperature';

// Botones de control manual
export function Button1() {
  return (
    <Button onClick={handleLevel1} variant="contained" className="button1">
      Level 1
    </Button>
  );
}

export function Button2() {
  return (
    <Button onClick={handleLevel2} variant="contained" className="button1">
      Level 2
    </Button>
  );
}

export function Button3() {
  return (
    <Button onClick={() => handleBoth(12, 13)} variant="contained" className="button1">
      Level 3
    </Button>
  );
}

export function TurnOffButton() {
  return (
    <Button onClick={handleTurnOff} variant="contained" color="error" className="button1">
      Turn Off
    </Button>
  );
}

export function AutomaticButton() {
  return (
    <Button onClick={Automatic} variant="contained" className="button1">
      Automatic Mode
    </Button>
  );
}

// Handlers de niveles
const handleLevel1 = async () => {
  await controlPin("on", 12);
  await controlPin("off", 13);
  Level1();
  console.log("Level 1 activado");
};

const handleLevel2 = async () => {
  await controlPin("off", 12);
  await controlPin("on", 13);
  Level2();
  console.log("Level 2 activado");
};

const handleBoth = async (pin: number, pin2: number) => {
  await controlPin("on", pin);
  await controlPin("on", pin2);
  Level3();
  console.log("Level 3 activado");
};

// Animaciones
function Level1() { document.documentElement.style.setProperty('--animation-duration', '.8s'); }
function Level2() { document.documentElement.style.setProperty('--animation-duration', '.5s'); }
function Level3() { document.documentElement.style.setProperty('--animation-duration', '.3s'); }
function Turnoff() { document.documentElement.style.setProperty('--animation-duration', ''); }

// Estado automático
let isAutomatic = false;
let automaticInterval: NodeJS.Timeout | null = null;

function Automatic() {
  if (isAutomatic) return; // evita duplicar intervalos
  isAutomatic = true;
  automaticInterval = setInterval(async () => {
    const value = await getTemperature();
    if (value > 20 && value < 23) {
      handleLevel1();
    } else if (value >= 23 && value < 27) {
      handleLevel2();
    } else if (value >= 27) {
      handleBoth(12, 13);
    }
    console.log("Automatic Mode - Temperature:", value);
  }, 2000);
}

const handleTurnOff = async () => {
  await controlPin("off", 12);
  await controlPin("off", 13);

  if (automaticInterval) {
    clearInterval(automaticInterval);
    automaticInterval = null;
  }
  isAutomatic = false;

  Turnoff();
  console.log("Modo automático desactivado y pines apagados");
};

export default Button1;
