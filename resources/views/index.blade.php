@extends('layouts.app')

@section('custom-page-style')

<link rel="stylesheet" href="css/indexpage.css">

@endsection

@section('page-content')

<div class="container">

    <div class="banner d-flex flex-row flex-wrap">
        <div class="flex-sm-fill banner-img">
            <img src="img/page-assets/banner-img.jpg" alt="Autumn Banner">
            <div class="img-title">
                <h3> GET READY FOR THE AUTUMN</h3>
                <p>We have everything prepare for you</p>
            </div>
        </div>
        <div class="flex-sm-fill banner-text d-flex">
            <div class="align-self-center">
                <h4>This is Vaimo Store</h6>
                <h6>YOUR ONE-STOP FASHION DESTINATION</h6>
                <p>Shop from over 850 of the best brands, including VAIMO's own label. Plus, get your daily fix of the freshest style, celebrity and music news.</p>
            </div>
        </div>
    </div>
    
    <div class="favourite-products">
        <h2 class="fav-prod-title"><span>OUR FAVOURITE</span></h2>
        <div class="products-list d-flex flex-row flex-wrap">
            @foreach ($products as $prod)
                <div class="product flex-sm-fill">
                    <img class="product-img" alt='{{ $prod["title"] }}' src='{{ $prod["image"] }}'>
                    <div class="product-detail">
                        <p> {{ $prod["title"] }}</p>
                        @if($prod["specialPrice"] == "")
                            <p>&#8364; {{ $prod["price"] }}</p>
                        @else
                            <p>
                                <span style="text-decoration: line-through;">
                                    &#8364; {{ $prod["price"] }} 
                                </span> 
                                &nbsp;
                                <span style="color: red">
                                    &#8364; {{ $prod["specialPrice"] }}
                                </span>
                            </p>
                        @endif
                        <a class="primary-btn" href="#">ADD TO CART</a>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

</div>

@endsection