// Getting bizzllet features icons
const issuanceIcon = document.querySelector(".issuance-icon")
const crowdfundingIcon = document.querySelector(".crowdfunding-icon")
const distributionIcon = document.querySelector(".distribution-icon")
const marketplaceIcon = document.querySelector(".marketplace-icon")

// Getting bizzllet features boxes
const issuanceBox = document.querySelector(".features-issuance")
const crowdfundingBox = document.querySelector(".features-crowdfunding")
const distributionBox = document.querySelector(".features-distribution")
const marketplaceBox = document.querySelector(".features-marketplace")

// Bizzllet features hover effect on the first icon - "Token issuance"
issuanceIcon.addEventListener("mouseover", function() {
    issuanceIcon.classList.add("features-icon-active")
        issuanceBox.classList.add("features-box-active")
    

    crowdfundingIcon.classList.remove("features-icon-active")
        crowdfundingBox.classList.remove("features-box-active")
    distributionIcon.classList.remove("features-icon-active")
        distributionBox.classList.remove("features-box-active")
    marketplaceIcon.classList.remove("features-icon-active")
        marketplaceBox.classList.remove("features-box-active")
})

// Bizzllet features hover effect on the second icon - "Crowdfunding"
crowdfundingIcon.addEventListener("mouseover", function() {
    crowdfundingIcon.classList.add("features-icon-active")
        crowdfundingBox.classList.add("features-box-active")
    

    issuanceIcon.classList.remove("features-icon-active")
        issuanceBox.classList.remove("features-box-active")
    distributionIcon.classList.remove("features-icon-active")
        distributionBox.classList.remove("features-box-active")
    marketplaceIcon.classList.remove("features-icon-active")
        marketplaceBox.classList.remove("features-box-active")
})

// Bizzllet features hover effect on the third icon - "Token distribution"
distributionIcon.addEventListener("mouseover", function() {
    distributionIcon.classList.add("features-icon-active")
        distributionBox.classList.add("features-box-active")
    

    issuanceIcon.classList.remove("features-icon-active")
        issuanceBox.classList.remove("features-box-active")
    crowdfundingIcon.classList.remove("features-icon-active")
        crowdfundingBox.classList.remove("features-box-active")
    marketplaceIcon.classList.remove("features-icon-active")
        marketplaceBox.classList.remove("features-box-active")
})

// Bizzllet features hover effect on the fourth icon - "Marketplace"
marketplaceIcon.addEventListener("mouseover", function() {
    marketplaceIcon.classList.add("features-icon-active")
        marketplaceBox.classList.add("features-box-active")
    

    issuanceIcon.classList.remove("features-icon-active")
        issuanceBox.classList.remove("features-box-active")
    distributionIcon.classList.remove("features-icon-active")
        distributionBox.classList.remove("features-box-active")
    crowdfundingIcon.classList.remove("features-icon-active")
        crowdfundingBox.classList.remove("features-box-active")
})

