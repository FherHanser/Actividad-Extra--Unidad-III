let mes = parseInt(prompt("Ingrese el número de un mes:"));

if (mes < 1 || mes > 12) {
  alert("Valor inválido");
} else {
  let estacion;
  switch (mes) {
    case 12:
    case 1:
    case 2:
      estacion = "Invierno";
      break;
    case 3:
    case 4:
    case 5:
      estacion = "Primavera";
      break;
    case 6:
    case 7:
    case 8:
      estacion = "Verano";
      break;
    case 9:
    case 10:
    case 11:
      estacion = "Otoño";
      break;
  }
  alert(`Es ${estacion}`);
  alert(`Fernand Joseph Hanser Reyes\nN° de Carnet: 16010330`);
}
