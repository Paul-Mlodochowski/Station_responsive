const arrow = document.getElementById("vanishing");
const box = document.querySelector("p:nth-child(2)");
arrow.addEventListener("click",() => {
    box.parentNode.removeChild(box);
})
