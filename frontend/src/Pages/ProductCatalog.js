import React from 'react'

export default function ProductCatalog() {
  return (
    <React.Fragment>
		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
			<div class="container">
				<a class="navbar-brand" href="index.html">Furni<span>.</span></a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarsFurni">
					<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li class="nav-item ">
							<a class="nav-link" href="index.html">Home</a>
						</li>
						<li class="active"><a class="nav-link" href="shop.html">Shop</a></li>
						<li><a class="nav-link" href="about.html">About us</a></li>
						<li><a class="nav-link" href="services.html">Services</a></li>
						<li><a class="nav-link" href="blog.html">Blog</a></li>
						<li><a class="nav-link" href="contact.html">Contact us</a></li>
					</ul>

					<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a class="nav-link" href="#"><img src="Assets/images/user.svg"/></a></li>
						<li><a class="nav-link" href="cart.html"><img src="Assets/images/cart.svg"/></a></li>
					</ul>
				</div>
			</div>		
		</nav>
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>

		

		<div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-1.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-2.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-1.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-2.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
		      	</div>
		    </div>
		</div>
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>
    </React.Fragment>
  )
}
