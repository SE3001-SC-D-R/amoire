import React from "react";

export default function Bar() {
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
    </React.Fragment>
  )
}
