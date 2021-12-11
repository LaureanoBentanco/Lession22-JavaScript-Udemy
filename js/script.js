
function Sumar (){
    let forma = document.getElementById('forma');
    let operandoA = forma['operadorA'];
    let operandoB = forma['operadorB'];

    let result =  parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(result))
    result = "No Contiene Numeros";
    document.getElementById('resultado').innerHTML = `El Resultado: ${result}`;
    console.log(`El Resultado: ${result}`)
    
}