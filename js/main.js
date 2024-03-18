//funcion
function calculoEdad(anioActual, anioNacimiento) {
    return `Su edad actual es ${anioActual - anioNacimiento}`;
}

console.log(calculoEdad(2024, 1989));



//Condicional
let tramite1 = "DNI"
let tramite2 = "Licencias"
let tramite3 = "Pasaportes"

let turnoTramite = prompt("Ingrese el tramite que desa realizar");

if (turnoTramite == "DNI" || turnoTramite == "Licencias" || turnoTramite == "Pasaportes") {
    alert("Usted selecciono " + turnoTramite);
} else {
    alert("Ese tramite es inexistente")
}

//ciclo
let diaTurno = prompt("Igrese el dia de la semana que desea realizar el tramite tomando comoalert que Lunes = 1")

switch (diaTurno) {
    case "1":
        alert("Usted selecciono el dia Lunes");
        break;
    case "2":
        alert("Usted selecciono el dia Martes");
        break;
    case "3":
        alert("Usted selecciono el dia Miercoles");
        break;
    case "4":
        alert("Usted selecciono el dia Jueves");
        break;
    case "5":
        alert("Usted selecciono el dia Viernes");
        break;
    case "6":
        alert("Usted selecciono el dia Sabado");
        break;
    case "7":
        alert("Usted selecciono el dia Domingo");
        break;
    default:
        alert("Ese dia no existe");
        break;
}

//funcion

