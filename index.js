function addClassToNav() {
    var styleElement = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if (scrollValue < 30){
    styleElement.classList.remove("showBg");
} else {
    styleElement.classList.toggle("showBg");
}
}

  function changeBg(){
    var navbar = document.getElementById('navbar'); 
    var scrollValue = window.scrollY;
    if (scrollValue < 30){
        navbar.classList.remove('navbar-scrolled');
    } else{
        navbar.classList.add('navbar-scrolled');
    };

    var contact = document.getElementById('contact'); 
    var scrollValue = window.scrollY;
    if (scrollValue < 30){
        contact.classList.remove('contact-details-scrolled');
    } else{
        contact.classList.add('contact-details-scrolled')
    };

    var navbarToggler = document.getElementById('navbarToggler'); 
    var scrollValue = window.scrollY;
    if (scrollValue < 30){ 
        navbarToggler.classList.remove('navbar-collapse-scroll');
    } else{
        navbarToggler.classList.add('navbar-collapse-scroll')
    };

    var navbartogglericon = document.getElementById('navbartogglericon'); 
    var scrollValue = window.scrollY;
    if (scrollValue < 30){
        navbartogglericon.classList.remove('navbar-toggler-scrolled');
    } else{
        navbartogglericon.classList.add('navbar-toggler-scrolled')
    }
  }
  window.addEventListener('scroll' , changeBg);


  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  };
  
  var myBtnWrapper = document.getElementById("myBtnWrapper");
  var btns = myBtnWrapper.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      // Check if the clicked button is already active
      if (!this.classList.contains("active")) {
        // Remove "active" class from the previously active button
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].classList.remove("active");
        }
        // Add "active" class to the clicked button
        this.classList.add("active");
      }
    });
  }