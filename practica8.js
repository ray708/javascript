//condicionales
//pedir nombre de persona
let nombre = prompt("ingresa tu nombre");
let edad = prompt("ingresa tu edad");
//mostramos el nombre de la persona
console.log(nombre);
console.log(edad);

//condicionale para saber la edad y mostrar un mensaje
if (edad >18) {
    alert("Bienvenidos a las paginas de peliculas violentas")
} else {
    alert("Debe ser mayor de edad")
}
alert("Tu nombre es:" + nombre + "y tu edad es:" + edad);