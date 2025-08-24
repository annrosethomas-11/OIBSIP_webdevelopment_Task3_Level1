document.getElementById("convertBtn").addEventListener("click", function() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unitSelect").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.textContent = "⚠️ Please enter a valid number.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "C") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === "F") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } else if (unit === "K") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    result.innerHTML = `
        ✅ Converted Values:<br>
        🌡️ ${celsius.toFixed(2)} °C <br>
        🔥 ${fahrenheit.toFixed(2)} °F <br>
        ❄️ ${kelvin.toFixed(2)} K
    `;
});
