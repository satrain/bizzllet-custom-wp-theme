<?php
    /* Template Name: Payroll */
    get_header();
?>

<style>
    .nav-item-solutions {
        color: #D79713 !important;
    }
    
    .nav-item-solutions-mobile {
        color: #202832 !important;
    }
</style>

<div class="payroll-hero">
    <div class="payroll-hero-content">
        <h1><span>Seamless</span> payroll management</h1>
        <h3>Pay and reward your employees in a couple of clicks. </h3>
        <div class="payroll-hero-mock"></div>
    </div>
</div>

<div class="payroll-why-bizzllet">
    <div class="payroll-why-bizzllet-content">
        <h2>Why <span>Bizzllet</span>?</h2>
        <div class="payroll-why-bizzllet-items">
            <div class="payroll-fast payroll-item-active">
                <div class="payroll-icon payroll-fast-icon"></div>
                <h3>Fast</h3>
                <p>Save time by paying your employees in one click.</p>
            </div>
            <div class="payroll-seamless">
                <div class="payroll-icon payroll-seamless-icon"></div>
                <h3>Seamless</h3>
                <p>Make automated payouts of salaries, equity, or bonuses in just a couple of seconds.</p>
            </div>
            <div class="payroll-reliable">
                <div class="payroll-icon payroll-reliable-icon"></div>
                <h3>Reliable</h3>
                <p>On-time, legally compliant, and secure.</p>
            </div>
        </div>
    </div>
</div>

<div class="payroll-pay-reward">
    <div class="payroll-pay-reward-content">
        <h1>Pay and reward your employees <span>today</span>.</h1>
        <button class="btn payments-btn payroll-btn">Open account</button>
    </div>
</div>

<!-- Fetching get started section from payments page || style is inside payments.css -->
<div class="get-started payroll-get-started">
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

<!-- Newsletter (fetched design from the payments cta) -->
<div class="payroll-newsletter payments-cta">
    <div class="payroll-newsletter-content payments-cta-content">
        <h2>Join the herd!</h2>
        <p class="payroll-newsletter-subscribe">Subscribe to our newsletter.</p>
        <p class="payroll-newsletter-no-spam">Once per week. No spam. Sometimes discounts.</p>
        <span>Always value.</span>

        <form>
            <input type="email" class="payroll-email-input payments-email-input" placeholder="Your email address">
            <button class="payroll-submit-input payments-submit-input">I'm in!</button>
        </form>
        <div class="payroll-newsletter-bison payments-cta-bison"></div>
    </div>
</div>

<?php
    get_footer('payments');
?>