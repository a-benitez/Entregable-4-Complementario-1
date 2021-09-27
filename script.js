//Función simple para saludar al usuario
function saludar (){
let nombre = prompt("Ingresar nombre");
alert("¡Bienvenido a nuestra tienda virtual! " + nombre);
}
saludar();

//Calcular el interés de comprar un producto en cuotas (según el banco) y el valor de cada cuota. Sumar además el costo de envío.

//El valor del producto ingresa por prompt
let precioProducto = parseFloat(prompt("Ingrese el precio del producto "));

//Función para calcular las cuotas
function calcularCuotas(banco,cuotas){
    banco = banco.toLowerCase();    
    let interes;
    let precioConInteres;
    let valorCuota;

    if(banco == "ciudad"){
        interes = 20;
    }else if(banco == "provincia"){
        interes = 10;
    }else if(banco == "nacion"){
        interes = 0;
    }else{
        interes = 50;
        console.log("Ese banco no posee promociones");
    }
//Antes de continuar crear una funcion (por fuera de esta) para calcular el interés y guardarlo en un return (ver linea 52)

    precioConInteres = calcularInteres (interes);
    valorCuota = precioConInteres / cuotas;
    alert ("El precio total con interés es: $" + precioConInteres);
    alert ("El valor de cada cuota es $" + valorCuota);

//Funcion para sumar el costo de envío 
    let envio = 500;
    let precioTotalConEnvio = 0;
    function sumar(productoConInteres, precioEnvio) {
        precioTotalConEnvio = precioConInteres + envio;
    }

//Funcion para mostrar el total por consola    
    function mostrar(mensaje) {
        console.log("El precio total con envio es $ " + mensaje);
    }
    sumar(precioConInteres, envio);            
    mostrar(precioTotalConEnvio);    
}

//Función para calcular el interés
function calcularInteres(interesBanco){
    let valorInteres = ((precioProducto * interesBanco)/100); //Hice el cálculo usando regla de 3 simple.
    let valorTotalConInteres = valorInteres + precioProducto;
    return valorTotalConInteres;
}

//Llamada a la función de calcular cuotas
calcularCuotas (prompt("Ingrese su banco: "), parseInt(prompt("Ingrese cantidad de cuotas: ")));