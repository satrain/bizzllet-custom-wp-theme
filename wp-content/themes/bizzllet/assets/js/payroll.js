const payrollFast = document.querySelector(".payroll-fast")
const payrollSeamless = document.querySelector(".payroll-seamless")
const payrollReliable = document.querySelector(".payroll-reliable")

payrollFast.addEventListener("mouseover", function() {
    payrollFast.classList.add("payroll-item-active")

    payrollSeamless.classList.remove("payroll-item-active")
    payrollReliable.classList.remove("payroll-item-active")
})

payrollSeamless.addEventListener("mouseover", function() {
    payrollSeamless.classList.add("payroll-item-active")

    payrollFast.classList.remove("payroll-item-active")
    payrollReliable.classList.remove("payroll-item-active")
})

payrollReliable.addEventListener("mouseover", function() {
    payrollReliable.classList.add("payroll-item-active")

    payrollSeamless.classList.remove("payroll-item-active")
    payrollFast.classList.remove("payroll-item-active")
})