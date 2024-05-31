document.getElementById('calcular').addEventListener('click', function() {
    const percentage = document.getElementById('percentage').value;
    const total = document.getElementById('total').value;
    const result = (percentage / 100) * total;
    document.getElementById('result').innerText = `Resultado: ${result}`;
});