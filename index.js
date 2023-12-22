let monto=parseInt(prompt("ingresa el monto a solicitar"));
let cantidadMeses=parseInt(prompt("ingresa el tiempo a pagar en meses"));
let cuotaMensual;

function calculoCuotaMensual(total, tiempo) {
    const tasa=(total*10)/100
    cuotaMensual=(total+tasa)/tiempo
    return cuotaMensual
    
}

let pagoMensual=calculoCuotaMensual(monto,cantidadMeses)   
 

for(let i=1;i<=cantidadMeses;i++){
console.log("la cuota "+i+" = "+pagoMensual.toFixed())
}
//alert("El costo por un prestamo de $"+monto+" a pagar en "+cantidadMeses+" cuotas es de $"+pagoMensual.toFixed()+" mensual")

 
 let pregunta=prompt("Desea calcular por otro monto responda si o no")

 if(pregunta==="si"){
  location.reload()
 }
else if(pregunta==="no"){
   alert ("gracias por utilizar nuestros servicios")
}

 else{alert("fin del programa")}


    





