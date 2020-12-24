const saveMoney = document.querySelector(".invoicing-save-money")
const getPaidFaster = document.querySelector(".invoicing-get-paid-faster")
const neverLose = document.querySelector(".invoicing-never-lose")
const stayCompliant = document.querySelector(".invoicing-stay-compliant")

saveMoney.addEventListener("mouseover", function() {
    saveMoney.classList.add("invoicing-content-box-active")

    getPaidFaster.classList.remove("invoicing-content-box-active")
    neverLose.classList.remove("invoicing-content-box-active")
    stayCompliant.classList.remove("invoicing-content-box-active")
})

getPaidFaster.addEventListener("mouseover", function() {
    getPaidFaster.classList.add("invoicing-content-box-active")

    saveMoney.classList.remove("invoicing-content-box-active")
    neverLose.classList.remove("invoicing-content-box-active")
    stayCompliant.classList.remove("invoicing-content-box-active")
})

neverLose.addEventListener("mouseover", function() {
    neverLose.classList.add("invoicing-content-box-active")

    saveMoney.classList.remove("invoicing-content-box-active")
    getPaidFaster.classList.remove("invoicing-content-box-active")
    stayCompliant.classList.remove("invoicing-content-box-active")
})

stayCompliant.addEventListener("mouseover", function() {
    stayCompliant.classList.add("invoicing-content-box-active")

    saveMoney.classList.remove("invoicing-content-box-active")
    neverLose.classList.remove("invoicing-content-box-active")
    getPaidFaster.classList.remove("invoicing-content-box-active")
})
