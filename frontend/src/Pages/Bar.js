import React from "react";

export default function Bar() {
  return (
    <React.Fragment>
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="index.html">armoire<span>.</span></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className="nav-item ">
							<a className="nav-link" href="index.html">Home</a>
						</li>
						<li className="active"><a className="nav-link">Product Catalogue</a></li>
						<li><a className="nav-link">Orders</a></li>
						<li><a className="nav-link">Services</a></li>
						<li><a className="nav-link">History</a></li>
						<li><a className="nav-link">Contact us</a></li>
					</ul>
					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link" href="#"><img src="Assets/images/user.svg"/></a></li>
					</ul>
				</div>
			</div>		
		</nav>
    </React.Fragment>
  )
}
