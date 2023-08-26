import React from "react";
import axios from "axios";
export default function Api (){
function displayTemp() {
    const apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
}
    axios.get(apiUrl).then(displayTemp);
}