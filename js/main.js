

   let operacionSeleccionada = "+";

   document.querySelectorAll("button[data-operacion]").forEach(
    (button)=> {
        button.addEventListener("click", (event) => {
            operacionSeleccionada = event.target.getAttribute("data-operacion");
          

        });
    }
   )
