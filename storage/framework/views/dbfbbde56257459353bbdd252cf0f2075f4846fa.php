<?php $__env->startSection('custom-page-style'); ?>

<link rel="stylesheet" href="css/indexpage.css">

<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-content'); ?>

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
            <?php foreach($products as $prod): ?>
                <div class="product flex-sm-fill">
                    <img class="product-img" alt='<?php echo e($prod["title"]); ?>' src='<?php echo e($prod["image"]); ?>'>
                    <div class="product-detail">
                        <p> <?php echo e($prod["title"]); ?></p>
                        <?php if($prod["specialPrice"] == ""): ?>
                            <p>&#8364; <?php echo e($prod["price"]); ?></p>
                        <?php else: ?>
                            <p>
                                <span style="text-decoration: line-through;">
                                    &#8364; <?php echo e($prod["price"]); ?> 
                                </span> 
                                &nbsp;
                                <span style="color: red">
                                    &#8364; <?php echo e($prod["specialPrice"]); ?>

                                </span>
                            </p>
                        <?php endif; ?>
                        <a class="primary-btn" href="#">ADD TO CART</a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>