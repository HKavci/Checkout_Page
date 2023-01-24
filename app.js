const bag = {price: 25.99}
const shoes = {price:45.99}
const clock = {price: 74.99}

let bagLocal = JSON.parse(localStorage.getItem("bagLocal")) || 1
let shoesLocal = JSON.parse(localStorage.getItem("shoesLocal")) || 1
let clockLocal = JSON.parse(localStorage.getItem("clockLocal")) || 1


window.addEventListener("load", ()=> {
    localStorage.setItem("bagLocal", JSON.stringify(bagLocal))
    localStorage.setItem("shoesLocal", JSON.stringify(shoesLocal))
    localStorage.setItem("clockLocal", JSON.stringify(clockLocal))
    calculateCartPrice()
})

const container = document.querySelector(".container")

let count = document.querySelector(".counter").innerText

container.addEventListener("click", (e)=>{
    e.preventDefault()
    if (e.target.classList.contains("plus")) {
        e.target.previousElementSibling.innerText++
        e.target.closest(".foto-price").querySelector(".price").innerText = (e.target.closest(".foto-price").querySelector("h3 span").innerText * e.target.previousElementSibling.innerText).toFixed(2)     
    } else if (e.target.classList.contains("minus")) {
        if (e.target.nextElementSibling.innerText>1) {
            e.target.nextElementSibling.innerText--
            e.target.closest(".foto-price").querySelector(".price").innerText = (e.target.closest(".foto-price").querySelector("h3 span").innerText * e.target.nextElementSibling.innerText).toFixed(2)  
        }
    } else if (e.target.classList.contains("remove")) {
        e.target.parentElement.parentElement.parentElement.remove()
    }
})





const calculateCartPrice = () => {

}




