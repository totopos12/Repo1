import "./styles/globals.css";
import Button1, { Button3, Button2 } from "./Components/Botones/button";
import Fan_Logo from "./assets/img/Fan_Logo.png";

const Home = () => {
return(
  <body>
  <header className="Firstclass">
    <img src={Fan_Logo.src} height={100} alt="img1"/>
    FAN CONTROLS
    </header>
    <footer>CETYS</footer>
    <Button1></Button1>
    <Button2></Button2>
    <Button3></Button3>
  </body> 
)
}

export default Home

  