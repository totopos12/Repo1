// src/services/temperatureService.js
export async function getTemperature() {
  try {
    const response = await fetch("http://10.13.19.180/temperature"); // cambia por la IP de tu ESP
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    const data = await response.json();
    return data.temperature;
  } catch (error) {
    console.error("Error obteniendo temperatura:", error);
    return null;
  }
}