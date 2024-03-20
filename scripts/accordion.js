var acc = document.getElementsByClassName("accordion"); //tomas el elemento con clase .accordion, o se el button
var i; //solo una variable inicializada para usar como contador en el for loop

for (i = 0; i < acc.length; i++) { // Iterar sobre todos los elementos seleccionados con la clase "accordion"
  acc[i].addEventListener("click", function() { // Agregar un "event listener" a cada elemento "accordion" cuando se hace clic
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling; // Seleccionar el panel que sigue inmediatamente al botón actual
    if (panel.style.display === "block") { // el if verifica si el panel actualmente está visible o no
      panel.style.display = "none";  // Si el panel está visible, ocultarlo.
    } else {
      panel.style.display = "block"; // Si el panel está oculto, mostrarlo
    }
  });
}

/*En resumen, este código se utiliza para crear un acordeón básico de JavaScript.
  Selecciona todos los elementos HTML con la clase "accordion", que generalmente son botones,
  y agrega un "event listener" a cada uno de ellos. Cuando se hace clic en un botón,
  este código alterna la visibilidad de un panel que está justo debajo del botón y
  también cambia la clase del botón para resaltarlo visualmente.*/