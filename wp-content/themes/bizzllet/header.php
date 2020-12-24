<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
    <title>Bizzllet</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <?php wp_head(); ?>
</head>

<body>
    <header>
        <a href="https://staging.bizzllet.com/">
            <div class="bizzllet-logo"></div>
        </a>
        <div class="nav">
            <nav>
                <ul>
                    <li class="nav-li-solutions">
                        <a class="nav-item-solutions" href="#">Solutions</a>
                        <div class="solutions-submenu">
                            <a href="#" class="solutions-payments">Payments</a>
                            <a href="#" class="solutions-invoicing">Invoicing</a>
                            <a href="#" class="solutions-payroll">Payroll</a>
                            <a href="#" class="solutions-identity">Identity</a>
                            <a href="#" class="solutions-merchant">Merchant</a>
                        </div>
                    </li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><button>GET STARTED</button></li>
                </ul>
            </nav>
        </div>

        <!-- Hamburger (burger) for the navigation beyond 1024px - Mobile and Tablet -->
        <div style="display: none;" id="hamburger">
            <div class="burger burger-squeeze">
                <div class="burger-lines"></div>
            </div>
        </div>
    </header>

    <!-- Mobile Navigation -- toggles on hamburger click -->
    <div class="nav-mobile-modal">
        <nav>
            <ul>
                <li><a class="nav-item-solutions-mobile" href="#">Solutions</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">About Us</a></li>
                <li><button>GET STARTED</button></li>
            </ul>
        </nav>
    </div>

    <div class="preloader">
    <div class="preloader-wrapper">
    <img src="https://staging.bizzllet.com/wp-content/themes/bizzllet/assets/images/questions-bgr.svg" loading="lazy"
            style="width: 70px; height: 70px; position: absolute;">
        <div class="preloader-main-circle">
            <div class="preloader-brown-circle">
                
            </div>
        </div>
    </div>
</div>