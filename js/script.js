// Mostrar/Ocultar Secciones 
function mostrarSeccion(id) {
  // Ocultar todas las secciones dentro de <main>
  document.querySelectorAll("main section").forEach(sec => {
    sec.style.display = "none";
  });

  // Mostrar solo la sección seleccionada
  const seccion = document.getElementById(id);
  if (seccion) {
    // El hero usa flex para mantener su estilo
    if (id === "hero") {
      seccion.style.display = "flex";
    } else {
      seccion.style.display = "block";
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("hero");
});



function calcularResultado() {
  const respuestasCorrectas = {
    q1: "b",
    q2: "a",
    q3: "b",
    q4: "b",
    q5: "b",
    q6: "b"
  };

  let aciertos = 0;
  for (let key in respuestasCorrectas) {
    const seleccionada = document.querySelector(`input[name="${key}"]:checked`);
    if (seleccionada && seleccionada.value === respuestasCorrectas[key]) {
      aciertos++;
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Tu resultado: " + aciertos + " de 6<br>";

  // Mostrar imagen según puntaje
  if (aciertos === 6) {
    resultado.innerHTML += '<img src="./img/lugar1.png" alt="Primer lugar">';
    resultado.innerHTML += "<p>¡Excelente, eres un experto!</p>";
  } else if (aciertos >= 3) {
    resultado.innerHTML += '<img src="./img/segundo.jpg" alt="Segundo lugar">';
    resultado.innerHTML += "<p>¡Muy bien, vas por buen camino!</p>";
  } else {
    resultado.innerHTML += '<img src="./img/tercero.jpg" alt="Tercer lugar">';
    resultado.innerHTML += "<p>No te preocupes, sigue aprendiendo.</p>";
  }
}