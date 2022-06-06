
<header id="header" class="header">
<a href="index.php" class="logo">
    <img src="images/logo-car.png" alt="">
</a>

<nav class="navbar">
    <a href="index.php#home">Home</a>
    <a href="index.php#about">about</a>
    <a href="index.php#menu">Brands</a>
    <a href="index.php#products">New Arrivals</a>
    <a href="index.php#review">review</a>
    <a href="index.php#contact">contact</a>
    <a href="index.php#blogs">blogs</a>
</nav>



<div class="icons">
<a href="register.php"> <div class="fas fa-user" id="user-btn"></div></a>
    <div class="fas fa-search" id="search-btn"></div>
<a href="cart.php">
    <div class="fas fa-shopping-cart" id="cart-btn">
            <?php

                        if (isset($_SESSION['cart'])){
                            $count = count($_SESSION['cart']);
                            echo "<span id=\"cart_count\" class=\"text-warning bg-light\">$count</span>";
                        }else{
                            echo "<span id=\"cart_count\" class=\"text-warning bg-light\">0</span>";
                        }

            ?>
</div>
                    </a>

<div class="fas fa-bars" id="menu-btn"></div></nav>
<div class="search-form">
    <input type="search" id="search-box" placeholder="search here...">
    <label for="search-box" class="fas fa-search"></label>
    </div>
</div>
</header>






