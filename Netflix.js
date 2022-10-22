   //declaring variables
const faq = document.getElementsByClassName("faq");
let i;
let x;
      for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    this.classList.toggle("active");    
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;      
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";     
      closeAllExcept(answer);
  };
})
}

    const closeAllExcept = (pan) => {
  for (x = 0; x < faq.length; x++) {
    let panelToClose = faq[x].nextElementSibling;
    if(panelToClose !== pan){
       faq[x].classList.remove("active");
       panelToClose.style.maxHeight = null;
       panelToClose.style.transition = "0.3s ease-out"
    }
  }
}  
                  
            window.addEventListener("load", () => {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("main").style.display = "block";
      });
