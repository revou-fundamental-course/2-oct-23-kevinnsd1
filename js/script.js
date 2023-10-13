// script.js
function convertTemperature(temperature, unit) {
    let resultText = '';
    let explanation = '';

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        resultText = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
        explanation = `${temperature}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        resultText = `${temperature}°F is equal to ${celsius.toFixed(2)}°C.`;
        explanation = `(${temperature}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
    }

    return { resultText, explanation };
}

function displayResult(resultText, explanation) {
    const resultCard = document.getElementById('result-card');
    resultCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Conversion Result</h5>
                <p class="card-text">${resultText}</p>
                <p class="card-text">${explanation}</p>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("temperature-converter");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const temperature = parseFloat(document.getElementById('temperature').value);
        const unit = document.getElementById('unit').value;

        const { resultText, explanation } = convertTemperature(temperature, unit);
        displayResult(resultText, explanation);
    });
});
