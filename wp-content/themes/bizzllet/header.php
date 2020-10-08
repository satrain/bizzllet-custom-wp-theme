<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
    <title>Bizzllet</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">

    <?php wp_head(); ?>
</head>

<body>
    <header>
        <a href="">
            <div class="bizzllet-logo"></div>
        </a>
        <div class="nav">
            <nav>
                <ul>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
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
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About</a></li>
                <li><button>GET STARTED</button></li>
            </ul>
        </nav>
    </div>