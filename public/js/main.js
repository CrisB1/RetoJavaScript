document.getElementById('calcular').addEventListener('click', function() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    const total = parseFloat(document.getElementById('total').value);
    const result = (percentage / 100) * total;
    const formattedResult = Number.isInteger(result) ? result : result.toFixed(2);
    document.getElementById('result').innerText = `Resultado: ${formattedResult}`;
});
    