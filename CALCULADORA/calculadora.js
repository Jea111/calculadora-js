const operador1 = document.querySelector(".operador1");
const operador2 = document.querySelector(".operacion");
const operador3 = document.querySelector(".operador3");
const button = document.querySelector(".btnCalcular");
const parrafo = document.getElementById("resultado");

button.addEventListener("click", calcular);

calcular();
function calcular() {
  // obtener valores del los input
  const opd = operador2.value;
  const opdor1 = parseFloat(operador1.value);
  const opdor2 = parseFloat(operador3.value);

  if (opd == "+" || opd == "-" || opd == "*" || opd == "/") {
    let resultadoOp; // guarda el resultado dependiendo el case
    switch (opd) {
      case "+":
        resultadoOp = opdor1 + opdor2;
        break;
      case "-":
        resultadoOp = opdor1 - opdor2;
        break;
      case "*":
        resultadoOp = opdor1 * opdor2;
        break;
      case "/":
        resultadoOp = opdor1 / opdor2;
        break;
    }
    parrafo.innerHTML = " el resultado es = " + resultadoOp;
    parrafo.style = "color:green";
  } else {
    parrafo.style = "color:red";
    parrafo.innerHTML = "calculo imposible";
  }
  //   alert("apretaste el boton de calcular", button);
}
