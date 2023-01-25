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


container.addEventListener("click", (e)=>{
    e.preventDefault()
    if (e.target.classList.contains("plus")) {
        e.target.previousElementSibling.innerText++    
        calculateProductTotal(e)
    } else if (e.target.classList.contains("minus")) {
        if (e.target.nextElementSibling.innerText>1) {
            e.target.nextElementSibling.innerText--  
            calculateProductTotal(e)
        }
    } else if (e.target.classList.contains("remove")) {
        e.target.parentElement.parentElement.parentElement.remove()
        
    }
    calculateCartPrice()
})


const calculateProductTotal = (e) => {
    e.target.closest(".foto-price").querySelector(".price").innerText = 
    (e.target.closest(".foto-price").querySelector(".counter").innerText * e.target.closest(".foto-price").querySelector("h3 span").innerText).toFixed(2)
}


const subTotal = document.getElementById("subtotal")
const tax = document.getElementById("tax")
const total = document.getElementById("sum")
const shipping = document.getElementById("shipping")

const calculateCartPrice = () => {
    const productTotals = document.querySelectorAll(".price")
    let totalPrice = 0
    productTotals.forEach (price=>{
        totalPrice += parseFloat(price.innerText)
    })
    subTotal.innerText = totalPrice.toFixed(2)

    tax.innerText = (subTotal.innerText * 0.18).toFixed(2)

    if (productTotals.length === 0) {
        shipping.innerText = 0
    }

    total.innerText = parseFloat(subTotal.innerText + tax.innerText + shipping.innerText).toFixed(2)
}




