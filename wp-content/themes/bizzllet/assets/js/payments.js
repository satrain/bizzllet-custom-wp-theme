// --------------------- GET STARTED SECTION HOVER ANIMATION ------------------
//Boxes fetched from Get Started section
const bizzlletIntro = document.querySelector(".quick-bizzllet-intro"),
      wordFromUs = document.querySelector(".a-word-from-us"),
      toLearnFrom = document.querySelector(".things-to-learn-from");


//EventListeners for the get started section's onhover animation
bizzlletIntro.addEventListener("mouseover", function() {
    bizzlletIntro.classList.add("get-started-active");

    wordFromUs.classList.remove("get-started-active");
    toLearnFrom.classList.remove("get-started-active");
});

wordFromUs.addEventListener("mouseover", function() {
    wordFromUs.classList.add("get-started-active");

    bizzlletIntro.classList.remove("get-started-active");
    toLearnFrom.classList.remove("get-started-active");
});

toLearnFrom.addEventListener("mouseover", function() {
    toLearnFrom.classList.add("get-started-active");

    bizzlletIntro.classList.remove("get-started-active");
    wordFromUs.classList.remove("get-started-active");
})


//--------------- PAYMENT-DO SECTION HOVER ANIMATION ----------------------
//fetching icons
const marketTrends = document.querySelector(".p-market-trends-icon"),
      cryptoIcon = document.querySelector(".p-crypto-icon"),
      digitalCurrencies = document.querySelector(".p-digital-currencies"),
      currenciesIcon = document.querySelector(".p-currencies");

//fetching content for each icon
const marketTrendsC = document.querySelector(".p-do-content-market-trends"),
      cryptoIconC = document.querySelector(".p-do-content-crypto"),
      digitalCurrenciesC = document.querySelector(".p-do-content-digital-currencies"),
      currenciesIconC = document.querySelector(".p-do-content-currencies");


//the actual animation

//Currencies Icon (4th icon)
currenciesIcon.addEventListener("mouseover", function() {
    currenciesIcon.classList.add("p-currencies-active");
        currenciesIconC.style.display = "flex";
        currenciesIconC.style.animation = "1s fadeIn";

    digitalCurrencies.classList.remove("p-digital-currencies-active");
        digitalCurrenciesC.style.display = "none";
    cryptoIcon.classList.remove("p-crypto-icon-active");
        cryptoIconC.style.display = "none";
    marketTrends.classList.remove("p-follow-trends-active");
        marketTrendsC.style.display = "none";
})

//Digital Currencies Icon (3rd icon)
digitalCurrencies.addEventListener("mouseover", function() {
    digitalCurrencies.classList.add("p-digital-currencies-active");
        digitalCurrenciesC.style.display = "flex";
        digitalCurrenciesC.style.animation = "1s fadeIn";

    currenciesIcon.classList.remove("p-currencies-active");
        currenciesIconC.style.display = "none";
    cryptoIcon.classList.remove("p-crypto-icon-active");
        cryptoIconC.style.display = "none";
    marketTrends.classList.remove("p-follow-trends-active");
        marketTrendsC.style.display = "none";
})

//Crypto Icon (2nd icon)
cryptoIcon.addEventListener("mouseover", function() {
    cryptoIcon.classList.add("p-crypto-icon-active");
        cryptoIconC.style.display = "flex";
        cryptoIconC.style.animation = "1s fadeIn";

    digitalCurrencies.classList.remove("p-digital-currencies-active");
        digitalCurrenciesC.style.display = "none";
    currenciesIcon.classList.remove("p-currencies-active");
        currenciesIconC.style.display = "none";
    marketTrends.classList.remove("p-follow-trends-active");
        marketTrendsC.style.display = "none";
})

//Market trends Icon (1st icon)
marketTrends.addEventListener("mouseover", function() {
    marketTrends.classList.add("p-follow-trends-active");
        marketTrendsC.style.display = "flex";
        marketTrendsC.style.animation = "1s fadeIn";

    cryptoIcon.classList.remove("p-crypto-icon-active");
        cryptoIconC.style.display = "none";
    digitalCurrencies.classList.remove("p-digital-currencies-active");
        digitalCurrenciesC.style.display = "none";
    currenciesIcon.classList.remove("p-currencies-active");
        currenciesIconC.style.display = "none";
})
