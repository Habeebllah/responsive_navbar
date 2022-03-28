function myFunction() {
    var x = document.getElementById("myTopnav");
    var i = document.getElementById("ic")
    
    if (x.className === "topnav") {
        x.className += " responsive";
        i.classList.remove("fa-bars")
        i.classList.add("fa-times")

    } else {
      x.className = "topnav";
      i.classList.remove("fa-times")
    i.classList.add("fa-bars")
    }
  }