import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import update from './images/update.png';
import del from './images/del.png';
import { useNavigate } from 'react-router';


export default function ProductCatalog() {

	let navigate = useNavigate();
	function addProduct() {
			navigate('/adding')
	}

	const [products, setProducts] = useState([{}])
	
	useEffect(() => {

		const axiosProd = async () => {
			const response = await Axios('/getProducts');
			setProducts(response.data)
		};
		axiosProd();
  	}, []);

				const useProducts = products.map((Product)=>{

                    return (
        					<div class="untree_co-section product-section before-footer-section">
		    					<div class="container">
										<div class="col-12 col-md-4 col-lg-3 mb-5">
											<a class="product-item" href="#">
											<img src={Product.selectedImage} class="img-fluid product-thumbnail"/>
											<h3 class="product-title">{Product.Name}</h3>
											<strong class="product-price">{Product.Price}</strong>
                                            
							
											<span class="icon-cross">
												<img src={update} class="img-fluid"/>
											</span>
							
                            				<span class="icon-del">
												<img src={del} class="img-fluid"/>
											</span>
											</a>
										</div> 
		   						 </div>
							</div>
                      );
				})

				return(
					<>
					<button className = "button" onClick={addProduct}>Add New Product</button>
					<br></br>
					{useProducts}
					</>
				)
}
