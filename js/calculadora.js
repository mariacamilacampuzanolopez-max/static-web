const miFormulario =   document.getElementById("calculadora");

miFormulario.addEventListener("submit",
    function(event){

        //Evita la recarga de la pagina web
        event.preventDefault();

        const numero1= document.getElementById("numero1");
        const operacion= operacionSeleccionada;
        const numero2= document.getElementById("numero2");
        

        console.log(" los numeros son n1:", numero1.value, "n2:", numero2.value, "operación:", operacion);
        
        const resultado = document.getElementById("calculo");
        resultado.hidden=false;
        
        let n1 = parseFloat(numero1.value);
        let n2 = parseFloat(numero2.value);
        let total;

        switch (operacion){
        case "+":
            total = n1 + n2;
            break;
        case "-":
            total = n1 - n2;
            break;
        case "*":
            total = n1 * n2;
            break;
        case "/":
            total = n2 !==0 ? n1 / n2 : "Error";
            break;
        default:
            total = "operador invalido";
       }
       resultado.textContent = `Resulado : ${total}`;
       
    }
)