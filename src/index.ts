let imputIngresarNota1 = <HTMLInputElement>(
  document.getElementById("imputIngresarNota1")
);
let imputIngresarNota2 = <HTMLInputElement>(
  document.getElementById("imputIngresarNota2")
);
let imputIngresarNota3 = <HTMLInputElement>(
  document.getElementById("imputIngresarNota3")
);
let btnCalcularNota = <HTMLButtonElement>(
  document.getElementById("btnCalcularNota")
);
let resultadoNota1 = <HTMLDivElement>document.getElementById("resultadoNota1");
let resultadoNota2 = <HTMLDivElement>document.getElementById("resultadoNota2");
let resultadoNota3 = <HTMLDivElement>document.getElementById("resultadoNota3");

let primeraNota: number;
let segundaNota: number;
let terceraNota: number;

function guardarResultadoNota(notaIngresada: number, notaGuardada: number) {
  notaGuardada = notaIngresada;
  return notaGuardada;
}

function resultadoTextoNota(notaGuardada: number) {
  if (notaGuardada > 8 && notaGuardada < 11) {
    return "excelente";
  } else if (notaGuardada > 4 && notaGuardada < 9) {
    return "Aprobado";
  } else if (notaGuardada < 5) {
    return "Desaprobado";
  } else return alert("el valor ingresado debe ser un numero entre 0 y 10");
}

function mensajeNota(notaGuardada: number, mensajeGuardado: string) {
  if (notaGuardada >= 0 && notaGuardada < 11)
    return `el resultado de la nota ${notaGuardada} es ${mensajeGuardado}`;
  else return `el valor ${notaGuardada} no es correcto`;
}

btnCalcularNota.addEventListener("click", () => {
  resultadoNota1.innerHTML = mensajeNota(
    Number(guardarResultadoNota(Number(imputIngresarNota1.value), primeraNota)),
    String(
      resultadoTextoNota(
        guardarResultadoNota(Number(imputIngresarNota1.value), primeraNota)
      )
    )
  );
  resultadoNota2.innerHTML = mensajeNota(
    Number(guardarResultadoNota(Number(imputIngresarNota2.value), segundaNota)),
    String(
      resultadoTextoNota(
        guardarResultadoNota(Number(imputIngresarNota2.value), segundaNota)
      )
    )
  );
  resultadoNota3.innerHTML = mensajeNota(
    Number(guardarResultadoNota(Number(imputIngresarNota3.value), terceraNota)),
    String(
      resultadoTextoNota(
        guardarResultadoNota(Number(imputIngresarNota3.value), terceraNota)
      )
    )
  );
});
