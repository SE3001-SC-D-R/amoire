import React from "react";

export default function Adding() {

    return (
        <React.Fragment>

		<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" >
			<div className="container">
				<a className="navbar-brand" href="index.html">armoire<span>.</span></a>
			</div>
		</nav>

		<div className="untree_co-section">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-6 mb-5 mb-md-0">
		          <h2 className="h3 mb-3 text-black">Add Product Details</h2>
		          <div className="p-3 p-lg-5 border bg-white">
		            <div className="form-group row">
		              <div className="col-md-12">
		                <label for="c_address" className="text-black">Product Name <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Enter the name of your product"/>
		              </div>
		            </div>

					<br></br>

					<div class="dropdown">
  						<button class="dropbtn">Product Category</button>
 						 <div class="dropdown-content">
  						  	<a href="#">Seating</a>
    						<a href="#">Dining</a>
    						<a href="#">Decorational</a>
  						</div>
					</div>

					<br></br>
					<br></br>
					
		            <div className="form-group row">
		              <div className="col-md-6">
		                <label for="c_state_country" className="text-black">Product Price <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_state_country" name="c_state_country"/>
		              </div>
		              <div className="col-md-6">
		                <label for="c_postal_zip" className="text-black">Product Stock <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip"/>
		              </div>
		            </div>

					<br></br>

		            <div className="form-group">
		              <label for="c_order_notes" className="text-black">Description</label>
		              <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Enter product description here..."></textarea>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
			<br></br>
			<button className="buttons">Add to Inventory</button>
		  </div>

		  <footer class="footer-section">
			<div class="container relative">

				<div class="sofa-img">
					<img src="Assets/images/sofa.png" alt="Image" class="img-fluid"/>
				</div>
			</div>
		</footer>

		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>
        </React.Fragment>
    )
}