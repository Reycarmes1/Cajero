var pin=138095
var saldo=50000
var intentos=0

alert("Bienvenidos al banco Codo a codo")

var verificar=parseInt(prompt("Ingrese su pin"))

while( verificar!=pin){
    intentos++
  if(intentos==2){
   alert("Ingresaste mal el pin te queda 1 intento");
   verificar=parseInt(prompt("Ingrese su pin"))
   pin=138095;
   }else {
          alert("Pin ingresado incorrecto. Intento " + intentos  + " de 3 ingrese nuevamente");
          verificar=parseInt(prompt("Ingrese su pin"))
        }
}
if(verificar=pin){
   while(selecionCajero!=5){
    var selecionCajero=parseInt(prompt("Opcion a realizar 1 Consultar,2 Depositar,3 Extraer ,4 Cambio de pin y 5 salir "))
 
    switch(selecionCajero){
    case 1:
        console.log("Consultar saldo " + saldo);
        break
    case 2:
        console.log("Depositar dinero ");
        if(saldo>=0){
        var depositar = parseInt(prompt("Cuanto desea depositar "))}
        var saldoA=saldo+depositar
        console.log("Saldo actual " + saldoA);
        break
    case 3:
        console.log("Extraer dinero ");
        if(saldo>0){
         var extraer = parseInt(prompt("Cuanto desea extraer "))}
         var saldoR=saldo-extraer
        console.log("Saldo restante " + saldoR);
        break
    case 4 :
        console.log("Cambio de pin ");
        var pinN=parseInt(prompt("Ingrese nuevo pin "))
        pinN==pin
        console.log("Su pin ahora es " + pinN)
        break
    case 5:
         console.log("Salir")
         break
    default:
        console.log("Ingrese opcion valida ");    
}
}
}