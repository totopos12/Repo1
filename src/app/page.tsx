import "./styles/globals.css";
import Button1, { Button3, Button2, TurnOff } from "./Components/Buttons/button";
import { LoaderFan } from "./Components/Loader_fan";
import Fan_Logo from "./assets/img/Fan_Logo.png";
import "./styles/button.css";

const Home = () => {
return(
  <body>
  <header className="Firstclass">
    <img src={Fan_Logo.src} height={100} alt="img1"/>
    FAN CONTROLS
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

   