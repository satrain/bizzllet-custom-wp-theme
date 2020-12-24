<?php
    /* Template Name: Identity */
    get_header(); 
?>

<div class="identity-hero">
    <div class="identity-hero-bgr"></div>
    <div class="i-hero-content">
        <h1><span>Digital Identity</span> on Blockchain</h1>
        <h3>Trust and be trusted in the digital world.</h3>
        <div class="i-hero-copy">
            <div class="i-hero-id">
                <div class="i-check1">
                    <div class="i-hero-id-icon"><div class="i-hero-id-icon-check"></div></div>
                    <p class="company-id">Company ID</p>
                </div>
                <div class="i-check2">
                    <div class="i-hero-id-icon"><div class="i-hero-id-icon-check"></div></div>
                    <p class="employee-id">Employee ID</p>
                </div>
                <div class="i-check3">
                    <div class="i-hero-id-icon"><div class="i-hero-id-icon-check"></div></div>
                    <p class="client-id">Client ID</p>
                </div>
                <div class="i-check4">
                    <div class="i-hero-id-icon"><div class="i-hero-id-icon-check"></div></div>
                    <p class="investor-id">Investor ID</p>
                </div>
                <button class="i-create-btn">create your digital identity</button>
            </div>
            <div class="i-hero-mock"></div>
        </div>
    </div>

</div>

<!-- Fetching get started section from payroll page || style is inside payments.css -->
<div class="identity-trust-online get-started payroll-get-started">
    <div class="cross-bgr-icon place1"></div>
    <div class="cross-bgr-icon place2"></div>
    <h1>The better way for building <span>trust online</span>.</h1>
    <div class="get-started-content">
        <div class="identity-trust-online-right get-started-right">
            <div class="get-started-box quick-bizzllet-intro">
                <h3>Digital signature</h3>
                <p style="display: none;">Create your digital signature used to sign documents and authorize transactions.</p>
            </div>
            <div class="get-started-box a-word-from-us get-started-active">
                <h3>Add <span>Multiple IDs</span></h3>
                <p style="display: none;">Add an unlimited number of buisness IDs (company, employee, client, or investor) under the same account, similar to domains and subdomains that can be assigned to anyone in the company.</p>
            </div>
            <div class="get-started-box things-to-learn-from">
                <h3>In-App Photo Submission</h3>
                <p style="display: none;">Users can take their own digital ID photo or upload one from their photo gallery.</p>
            </div>
        </div>
    </div>
</div>

<div class="identity-create">
    <div class="i-create-content">
        <h1>Create your digital identity <span>today</span>.</h1>
        <button class="i-open-btn">open free account</button>
    </div>
</div>

<div class="identity-security">

</div>

<div class="identity-get-started">
    <!-- Fetching get started section from payroll page || style is inside payments.css -->
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
</div>

<div class="identity-newsletter">
    <div class="identity-newsletter-bgr-left"></div>
    <div class="identity-newsletter-bgr-right"></div>
    <div class="i-newsletter-content">
        <!-- Check span color -->
        <h1>Join the herd <span>(with your unique ID)</span></h1>
        <h3>Subscribe to our newsletter.</h3>
        <!-- Always vaule. need change to bold -->
        <p>Once per week. No spam. Sometimes discounts. <strong>Always value.</strong></p>
        <form class="i-newsletter-email-btn">
            <input type="email" class="i-newsletter-email" placeholder="Your email address">
            <button class="i-newsletter-btn">I'm in!</button>
        </form>
    </div>
</div>

<?php get_footer('payments'); ?>