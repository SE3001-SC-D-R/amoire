import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

import update from './images/update.png';
import del from './images/del.png';

export default function ProductCatalog() {

	const [products, setProducts] = useState([{}])

	let navigate = useNavigate();
	function addProduct() {
			navigate('/adding')
	 }
	 function deleteProduct(id){
		Axios.delete(`delete/${id}`)
		navigate('/delete')
	 }
	 function updateProduct(){
		navigate('/update')
	 }

	
	const listProducts = async () => {
		const response = await Axios('/getProducts');
		setProducts(response.data)
	};
	
	listProducts();

	const useProducts = products.map((Product)=>{

                    return (
        					<div className="untree_co-section product-section before-footer-section">
		    					<div className="container">
										<div className="col-12 col-md-4 col-lg-3 mb-5">
											<a className="product-item" href="#">
											<img src={Product.selectedImage} className="img-fluid product-thumbnail"/>
											<h3 className="product-title">{Product.Name}</h3>
											<strong className="product-price">{Product.Price}</strong>
                                            <p>{Product.Description}</p>
							
											<span className="icon-cross">
												<img src={update} className="img-fluid"/>
											</span>
						
                            				<span className="icon-del" onClick={() => deleteProduct(Product._id)}>
												<img src={del} className="img-fluid"/>
											</span>
											</a>
										</div> 
		   						 </div>
							</div>
                      );
				})

	return(
		<React.Fragment>
				<button className = "button" onClick={addProduct}>Add New Product</button>
					<br></br>
				{useProducts}
		</React.Fragment>
		)
}
