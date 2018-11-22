<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Vaimo Frontend Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CDN -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">        
        <!-- Font awesome-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Custom styles -->
        <link rel="stylesheet" href="css/global.css">
        <link rel="stylesheet" href="css/navbar.css">
    </head>
    <body onresize="sideChange()" onload="sideChange()">

        <!--<a href="#">ACCESSORIES</a>
                <div class="dropdown">
                    <a href="#" class="collections-menu">COLLECTIONS</a>                       
                    <ul class="dropdown-menu dropdown-firstmenu">
                        <li class="dropdown-submenu">
                            <a tabindex="-1" href="#">2014</a>
                            <ul class="dropdown-secondmenu dropdown-menu">
                                <li><a tabindex="-1" href="#">SPRING</a></li>
                                <li><a href="#">SUMMER</a></li>
                                <li><a href="#">AUTUMN</a></li>
                                <li><a href="#">WINTER</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a tabindex="-1" href="#">2013</a>
                            <ul class="dropdown-secondmenu dropdown-menu">
                                <li><a tabindex="-1" href="#">SPRING</a></li>
                                <li><a href="#">SUMMER</a></li>
                                <li><a href="#">AUTUMN</a></li>
                                <li><a href="#">WINTER</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a tabindex="-1" href="#">2012</a>
                            <ul class="dropdown-secondmenu dropdown-menu">
                                <li><a tabindex="-1" href="#">SPRING</a></li>
                                <li><a href="#">SUMMER</a></li>
                                <li><a href="#">AUTUMN</a></li>
                                <li><a href="#">WINTER</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a tabindex="-1" href="#">2011</a>
                            <ul class="dropdown-secondmenu dropdown-menu">
                                <li><a tabindex="-1" href="#">SPRING</a></li>
                                <li><a href="#">SUMMER</a></li>
                                <li><a href="#">AUTUMN</a></li>
                                <li><a href="#">WINTER</a></li>    
                            </ul>
                        </li>                            
                    </ul>
                </div> 
                <a href="#">SALE</a>
            </div>           
        </div> -->
        <nav class="navbar navbar-expand-md navbar-light bg-light" id="navbar">  
            <div class="container">
                <div class="d-flex flex-column align-items-start w-100">
                    <div class="d-flex justify-content-between w-100" id="nav-firstline">
                        <div class=" nav-brand bd-highlight">
                            <a href="{{ url('/') }}" class="nav-brand">
                                <img src="img/page-assets/logo.png" />
                            </a>
                        </div>
                        <div>                        
                            <div class="nav-btn">
                                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fa fa-bars nav-fa-icons"></i>
                                </button>            
                            </div>
                            <div class=" bd-highlight nav-btn">
                                <a id="shopping-cart" href="#">
                                                                        
                                    <i class="fa fa-shopping-cart nav-fa-icons"></i> &nbsp;
                                    <span id="cart-info">3 items in cart</span>
                                    
                                </a>                            
                            </div>
                        </div>
                    </div>     

                      
                    <div class="collapse navbar-collapse  ml-2 top-bar" id="main-navbar">
                            <a class="navbar-brand" href="#"></a>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">WOMEN </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">MEN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">JUNIOR</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ACCESSORIES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">COLLECTIONS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="sale">SALE</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link" href="#">MY ACCOUNT</a>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end div.d-flex -->
            </div> <!-- end div.container -->
        </nav>
        
        <div class="content">
            <div class="container">
                @yield('page-content')
            </div>
        </div>
        <div class="footer">
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

        </div>
      

        


        <!-- bootstrap -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!--custom scripts-->
        <script src="js/global.js"></script>
    </body>
</html>
