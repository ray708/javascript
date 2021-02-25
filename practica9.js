//ejercicio dia de la semana
let dia = prompt("ingresa el dia de la semana");

dia = dia.toLowerCase();

if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "miércoles" || dia == "jueves" || dia == "viernes" ) 
{
    alert("entresemana");    
} 
else {
    if( dia == "Domingo" || dia =="Sabado" || dia == "Sábado")
    { alert("es finde semana");}
    alert("ingrese un dia de la semana")
}