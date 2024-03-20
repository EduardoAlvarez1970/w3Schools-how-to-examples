function openCity(evt, cityName) { //esta funcion dispara eventos con el onclick en el html

    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"; //esconde el contenido de tabcontent con display:none
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block"; 
    evt.currentTarget.className += " active";
  }

   //To open a specific tab on page load, use JavaScript to "click" on the specified tab button:
  // Get the element with id="defaultOpen" and click on it
   document.getElementById("defaultOpen").click();