// src/services/espControlService.ts

const ESP_IP = "http://10.13.19.180"; // IP del ESP8266

/**
 * Controla un pin del ESP8266
 * @param accion "on" | "off"
 * @param pin número del GPIO (ej. 12 o 13)
 */
export async function controlPin(accion: "on" | "off", pin: number) {
  try {
    const response = await fetch(`${ESP_IP}/ventilador?accion=${accion}&pin=${pin}`);
    if (!response.ok) throw new Error("Error en la petición");

    const data = await response.json();

    // Normalizamos la respuesta para que siempre tenga la misma estructura
    return {
      status: data.status || "ok",
      accion: data.accion || accion,
      pin: data.pin || pin,
      message: data.message || (accion === "on" ? `Pin ${pin} encendido` : `Pin ${pin} apagado`),
    };
  } catch (error) {
    console.error("Error comunicando con ESP32:", error);
    return {
      status: "error",
      accion,
      pin,
      message: `No se pudo comunicar con el ESP32 en pin ${pin}`,
    };
  }
}

// export async function controlBothPinsClient(accion: "on" | "off" = "on", pin = 12, pin2 = 13) {
//   const result1 = await controlPin(accion, pin);
//   const result2 = await controlPin(accion, pin2);

//   return {
//     status: result1.status === "ok" && result2.status === "ok" ? "ok" : "error",
//     accion,
//     pin,
//     pin2,
//     message: `Resultados: ${result1.message} | ${result2.message}`,
//   };
// }


