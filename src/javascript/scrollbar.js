export function handleScroll() {
    window.onscroll = function () {
      checkScroll();
    };
  
    function checkScroll() {
      const navbar = document.getElementById("navbar");
      const content = document.querySelector("nav");

      if (window.pageYOffset > 500) {
        navbar.classList.add("fixed");
        content.style.marginTop = 0; 
        content.style.width = '100%';
      } else {
        navbar.classList.remove("fixed");
        content.style.marginTop = "0px";
      }
    }
}

export function handleScroll1() {
  const navbar = document.getElementById("navbar1");
  const content = document.querySelector("nav");
  navbar.style.display="none";

  window.onscroll = function () {
    checkScroll();
  };
 

  function checkScroll() {
    if (window.pageYOffset > 500) {
      navbar.classList.add("fixed");
      content.style.marginTop = 0;
      navbar.style.width="100%";
      navbar.style.display="block";
    } else {
      navbar.classList.remove("fixed");
      content.style.marginTop = "0px";
      navbar.style.display="none";
    }
  }
}
