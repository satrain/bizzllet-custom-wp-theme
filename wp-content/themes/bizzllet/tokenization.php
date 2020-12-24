<?php
    /* Template Name: Tokenization */
    get_header();
?>
<main>
    <div class="tokenization-hero">
        <div class="tokenization-hero-content">
            <h1>Accelerate business with <span>tokenization</span> of assets</h1>
            <h3>Bizzllet makes tokenization of assets a fair game.</h3>
            <button class="btn hero-btn">create your free account</button>
            <div class="tokenization-hero-mock"></div>
        </div>        
    </div>

    <!-- What is asset tokenization? -->
    <div class="tokenization-what-is">
        <div class="cross-bgr-icon place1"></div>
        <div class="cross-bgr-icon place2"></div>
        <h1>What is <span>asset tokenization</span>?</h1>
        <h3 class="what-is-subheading1">The idea behind asset tokenization is simple:</h3>
        <h3 class="what-is-subheading2">it allows us to convert the rights to assets with economic value into a digital token.</h3>
    </div>

    <!-- Bizzllet features -->
    <div class="tokenization-bizzllet-features">
        <h1><span>Bizzllet</span> features</h1>
        <div class="bizzllet-features-icons">
            <div class="issuance-icon features-icon-active"></div>
            <div class="crowdfunding-icon"></div>
            <div class="distribution-icon"></div>
            <div class="marketplace-icon"></div>
        </div>
        <div class="bizzllet-features-container">  
            <div class="features-issuance features-box-active">
                <h3 class="issuance-heading"><span>Token</span> issuance</h3>
                <div class="features-copy">Tokenize assets in a couple of clicks. No coding knowledge needed.</div>
            </div>

            <div class="features-crowdfunding">
                <h3 class="crowdfunding-heading">Crowdfunding</h3>
                <div class="features-copy">Crowdfund your business on our platform, quick & easy. Verify investors’ identity, get investments in both FIAT & cryptocurrencies, and monitor progress in the dashboard.</div>
            </div>

            <div class="features-distribution">
                <h3 class="distribution-heading"><span>Token</span> distribution</h3>
                <div class="features-copy">Mass distribute tokens to your investors, employees, clients, and community. Hassle-free.</div>
            </div>

            <div class="features-marketplace">
                <h3 class="marketplace-heading">Marketplace</h3>
                <div class="features-copy">Buy, sell, and trade tokens on Bizzllet’s marketplace. Easy access directly from your wallet.</div>
            </div>
        </div>
    </div>

    <div class="tokenization-cta">
        <div class="tokenization-cta-content">
            <div class="tokenization-cta-bgr-left"></div>
            <div class="tokenization-cta-bgr-right"></div>
            <h2>Tokenize your herd <br>
            (or anything in this world) today.</h2>
            <button class="tokenization-btn payments-btn">Open account</button>
        </div>
    </div>

    <div class="what-can-be-tokenized">
        <div class="wcb-tokenized-content">
            <h1>What can be <span>tokenized</span>?</h1>
            <div class="wcb-tokenized-copy">
                <div class="wcb-private-equity">
                    <h3>Private equity shares</h3>
                    <p>Tokenize equity shares for easier distribution to partners, investors, and employees.</p>
                </div>
                <div class="wcb-commodities">
                    <h3>Commodities</h3>
                    <p>Tie a token to commodities and make them available to a much wider market.</p>
                </div>
                <div class="wcb-real-estate">
                    <h3>Real estate</h3>
                    <p>Tokenize real estate and enable micro investors to buy or sell assets.</p>
                </div>
                <div class="wcb-physical-goods">
                    <h3>Physical goods</h3>
                    <p>Illiquid assets - including art, wine, machines, or anything else can be tokenized to give proof of origin, ownership, or price.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Fetching get started section from payments page || style is inside payments.css -->
<div class="get-started tokenization-get-started">
    <div class="cross-bgr-icon place1"></div>
    <div class="cross-bgr-icon place2"></div>
    <h1>How to <span>get started</span></h1>
    <div class="get-started-content">
        <div class="get-started-mock"></div>
        <div class="get-started-right">
            <div class="get-started-box quick-bizzllet-intro">
                <h3>Quick Bizzllet intro</h3>
                <span style="display: none;" class="getting-started-subheading">getting started</span>
                <p style="display: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dapibus mauris, tincidunt imperdiet mi porttitor sed. <a href="#">Read more</a></p>
            </div>
            <div class="get-started-box a-word-from-us get-started-active">
                <h3>A word from us</h3>
                <span style="display: none;" class="getting-started-subheading">getting started</span>
                <p style="display: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dapibus mauris, tincidunt imperdiet mi porttitor sed. <a href="#">Read more</a></p>
            </div>
            <div class="get-started-box things-to-learn-from">
                <h3>Things to learn from</h3>
                <span style="display: none;" class="getting-started-subheading">getting started</span>
                <p style="display: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dapibus mauris, tincidunt imperdiet mi porttitor sed. <a href="#">Read more</a></p>
            </div>
        </div>
    </div>
</div>

<!-- Fetching newsletter from payments page || only heading changed || all style is inside payments.css -->
<div class="payments-newsletter invoicing-newsletter">
    <div class="payments-newsletter-left invoicing-newsletter-left"></div>
    <div class="payments-newsletter-right invoicing-newsletter-right"></div>
    <h2 class="invoicing-newsletter-heading">Subscribe to our newsletter.</h2>
    <p class="tokenization-newsletter-copy payments-newsletter-copy">Once per week. No spam. Sometimes discounts.</p>
    <p class="payments-newsletter-subcopy">Always value.</p>

    <form>
        <input type="email" class="payments-email-input" placeholder="Your email address">
        <button class="payments-submit-input">I'm in!</button>
    </form>
</div>

<?php get_footer('payments'); ?>