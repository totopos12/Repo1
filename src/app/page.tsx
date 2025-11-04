'use client';
import * as React from "react";
import { useState, useEffect } from "react";
import "./styles/global.css";
import Button1, { Button3, Button2, TurnOff, AutomaticButton } from "./Components/Buttons/button";
import { LoaderFan } from "./Components/Loader_fan";
import Fan_Logo from "./assets/img/Fan_Logo.png";
import { getTemperature }  from "./Services/Temperature";

const Home = () => {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getTemperature();
      setTemperature(temp);
    };

    fetchData(); // primera llamada
    const interval = setInterval(fetchData, 2000); // cada 2 segundos

    return () => clearInterval(interval);
  }, []);

return(
  <body>
  <header className="Firstclass">
    <img src={Fan_Logo.src} height={100} alt="img1"/>
    FAN CONTROLS
    <AutomaticButton></AutomaticButton>
    <p>
  Current Temperature:{" "}
  {temperature !== null ? `${temperature} °C` : "Loading..."}
</p>
    </header>
    <LoaderFan></LoaderFan>
  <div className="fixed-buttons">
    <Button1></Button1>
    <Button2></Button2>
    <Button3></Button3>
    <TurnOff></TurnOff>
    </div>
  <footer>CETYS</footer>
  
  </body>
   
)
}

export default Home

   