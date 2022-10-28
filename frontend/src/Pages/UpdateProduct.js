import React, {useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'

export default function UpdateProduct() {

	const {state} = useLocation();
	const { prodID, prodName } = state; 

    const[product, setProduct] = useState({
        Name: "",
		url: "",
		Category: "",
		Price: 0,
		stock: 0,
		Description: "",
		selectedImage: "",
    })

	const updateProduct = () => {
        axios.put('/update/'+prodID, product)
        .then((product) => console.log(product))
        window.location = '/update'
    }

	return (
    <div>
        <div className="untree_co-section">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-6 mb-5 mb-md-0">
		          <h2 className="h3 mb-3 text-black">Update Product Details</h2>
		          <div className="p-3 p-lg-5 border bg-white">
		            <div className="form-group row">
		              <div className="col-md-12">
		                <label htmlFor="c_address" className="text-black">Product Name: {prodName}<span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_address" name="Name" value={product.Name} placeholder="Enter the name of your product"/>
		              </div>
		            </div>

					<br></br>
					
		            <div className="form-group row">
		              <div className="col-md-6">
		                <label htmlFor="c_state_country" className="text-black">Product Price: <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_state_country" name="Price" value={product.Price} required />
		              </div>
		              <div className="col-md-6">
		                <label htmlFor="c_postal_zip" className="text-black">Product Stock: <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_postal_zip"name="stock" value={product.stock} required />
		              </div>
		            </div>

					<br></br>

					<div className="form-group row">
		              <div className="col-md-12">
		                <label htmlFor="c_address" className="text-black">Product Image URL: <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_address"  placeholder="Enter the name of your product" name="url" value={product.url} required />
		              </div>
		            </div>

					<br></br>

		            <div className="form-group">
		              <label htmlFor="c_order_notes" className="text-black">Description: </label>
		              <textarea id="c_order_notes" cols="30" rows="5" className="form-control"name="Description" value={product.Description} required  placeholder="Enter product description here..."></textarea>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
			<br></br>
			<button className="buttons">Update Product</button>
		  </div>

		  <footer className="footer-section">
			<div className="container relative">

				<div className="sofa-img">
					<img src="Assets/images/sofa.png" alt="Image" className="img-fluid"/>
				</div>
			</div>
		</footer>
    </div>
  )
}
