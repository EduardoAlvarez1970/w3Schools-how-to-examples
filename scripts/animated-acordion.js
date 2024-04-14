var acc = document.getElementsByClassName("accordion"); /*tomo el button*/
var i; /*solo una var para inicializar el for loop*/

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active"); /*agrega la clase .active al css*/
    var panel = this.nextElementSibling; /*le dice que abra el panel "a continuacion o sea nextSibling element"*/
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*This uses JavaScript to slide down the content by setting a calculated max-height,
 depending on the panel's height on different screen sizes */