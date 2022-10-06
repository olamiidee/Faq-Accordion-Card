const arrows = document.querySelectorAll(".arrow")
const x = document.querySelector(".answer-div")
const qst = document.querySelector(".question")




arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        if (x.style.display === "none") {
          x.style.display = "block";
          arrows.src = "/images/chevron-up.png"
          qst.style.fontWeight = "900"
          
        } else {
          x.style.display = "none";
          arrows.src = "/images/chevron-down.png"
          qst.style.fontWeight = "normal"
        }
    
    })  
})