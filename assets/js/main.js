function calcular() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        resultado = 'Magreza'
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = 'Normal'
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 39.9) {
        resultado = 'Obesidade'
    } else if (imc >= 40) {
        resultado = 'Obesidade Grave'
    } else {
        resultado = 'Não encontramos nenhuma informação, por favor reveja o formulário' 
    }
 document.getElementById('resultado').textContent = resultado;

}
