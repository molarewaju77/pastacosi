document.addEventListener('DOMContentLoaded', function() {
  const togglerButton = document.querySelector('.navbar-toggler');
  const navbarlinks = document.querySelectorAll('.navbar-nav > .nav-item > .nav-link');
  const navbar = document.querySelector('.navbar');

  togglerButton.addEventListener('click', function() {
    navbar.classList.toggle('showBg');
  });
  navbarlinks.forEach(function(link){
    link.addEventListener('click', function () {
      if
      (navbar.classList.contains('showBg'))
      {
        navbar.classList.remove('showBg');
      }
    });
  });
});
//To change bg on scroll
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
    };

    var arrowUp = document.getElementById('arrowUp'); 
    var scrollValue = window.scrollY;
    if (scrollValue > 150 ){
      arrowUp.classList.add('arrow-wrapper-scrolled');
    } else{
      arrowUp.classList.remove('arrow-wrapper-scrolled')
    };
  }
  window.addEventListener('scroll' , changeBg);

//for the filter section
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
  var btns = myBtnWrapper.getElementsByClassName("mybtn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      // Check if the clicked button is already active
      if (!this.classList.contains("action")) {
        // Remove "active" class from the previously active button
        var current = document.getElementsByClassName("action");
        if (current.length > 0) {
          current[0].classList.remove("action");
        }
        // Add "active" class to the clicked button
        this.classList.add("action");
      }
    });
  }
  ;

  //for navlinks when active
  function handleNavlinkClick()
  {

    var navlinks = document.querySelectorAll('.nav-link');
    navlinks.forEach(function(link){
      link.classList.remove('active');
    });
    this.classList.add('active');
  }

  var navlinks = document.querySelectorAll('.nav-link');
  navlinks.forEach(function(navlink){
    navlink.addEventListener('click', handleNavlinkClick);
  });

//for form when submit is clicked
  document.getElementById("MForm").addEventListener("submit",
  function(event){
  event.preventDefault();
  alert("Your booking request was sent. We will call back or send an Email to confirm your reservation.");
  document.getElementById("inputText").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputText").value = "";
  document.getElementById("textArea").value = "";
  });
  

//to close collapse item when navlink is clicked
  document.addEventListener('DOMContentLoaded',function(){
    const navbarlinks = document.querySelectorAll('.navbar-nav > .nav-item > .nav-link');
    const togglerButton = document.querySelector('.navbar-toggler');
    navbarlinks.forEach(function(link){
      link.addEventListener('click',function(){
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if 
        (navbarCollapse.classList.contains('show')){
          navbarCollapse.classList.remove('show');
          togglerButton.classList.add('collapsed');
          togglerButton.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });








