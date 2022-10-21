import React from 'react'
import { useNavigate } from 'react-router';

export default function ProductCatalog() {

	let navigate = useNavigate();
	function addProduct() {
		navigate('/adding')
	}

	return (
    <React.Fragment>
		
		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark">
			<div class="container">
				<a class="navbar-brand" href="index.html">armoire<span>.</span></a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarsFurni">
					<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li class="nav-item ">
							<a class="nav-link" href="index.html">Home</a>
						</li>
						<li class="active"><a class="nav-link">Product Catalogue</a></li>
						<li><a class="nav-link">Orders</a></li>
						<li><a class="nav-link">Services</a></li>
						<li><a class="nav-link">History</a></li>
						<li><a class="nav-link">Contact us</a></li>
					</ul>

					<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a class="nav-link" href="#"><img src="Assets/images/user.svg"/></a></li>
					</ul>
				</div>
			</div>		
		</nav>
		<button class = "button" onClick={addProduct}>Add New Product</button>


		<div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="https://www.freepnglogos.com/uploads/furniture-png/furniture-png-transparent-furniture-images-pluspng-15.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-1.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-2.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
							</span>
						</a>
					</div>

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
							</span>
						</a>
					</div>

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-1.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-2.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
							</span>
						</a>
					</div>

					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="Assets/images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>

							<span class="icon-cross">
								<img src="Assets/images/update.png" class="img-fluid"/>
							</span>

                            <span class="icon-del">
								<img src="Assets/images/del.png" class="img-fluid"/>
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
