import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Service.css';

function Agrigenotyping({ service, image, price, description }) {
  const [product, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const products = [localStorage.getItem('product')];
    const productItems = JSON.parse(products);
    setProducts(productItems);

    // Check if the user is logged in (replace this with your actual logic)
    const userLoggedIn = checkLoginStatus(); // Implement this function
    setIsLoggedIn(userLoggedIn);
  }, []);

  const setProduct = () => {
    const productInfo = {
      service: service,
      image: image,
      price: price,
      description: description,
    };

    try {
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      if (isLoggedIn) {
        const updatedCartItems = [...existingCartItems, productInfo];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        console.log('Product added to cart:', productInfo);
        alert('Your product was successfully added to the cart!');
      } else {
        alert('Please log in to add the product to the cart.');
        history.push('/login');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Error adding product to cart. Please try again.');
    }
  };

  const checkLoginStatus = () => {
    const isLoggedIn  = 'true'; 
  return isLoggedIn;
  };

  return (
    <div className='mt-5 pt-5'>
      <div class="box">
  <div class="container mt-5">				
        <div class="section-title text-center">
        <h1 class="display-5 mt-5"><strong>Agrigenotyping</strong></h1></div>
        <p>Discover the future of precision agriculture with our cutting-edge Agrigenotyping Service using Illumina iScan technology. 
            Our microarray services offer farmers and researchers a powerful tool to unlock the genetic potential of crops and livestock. 
            With the iScan system, we provide high-throughput genotyping, delivering accurate and comprehensive genetic data to optimize
            breeding programs, disease resistance, and crop yield. Our experienced team ensures top-quality results, enabling you to make 
            informed decisions for your agricultural operations.<br></br><br></br>
            Join the agricultural revolution and harness the potential of genomics in farming with our Agrigenotyping Service. Drive innovation and maximize productivity with the latest in genetic analysis.</p>

             <div class="section-title mt-5">
             <h1 class="display-5 mt-5">Services</h1></div>

             <div class="row">
    {product.map((product) => {
        return (
            <div class="col-md-3 mb-5 mt-5 pt-5">
            <div class="ibox-3">
                <div class="ibox-content-2 product-box-2">
                    <div class="product-imitation">
                        [ INFO ]
                    </div>
                    <div class="product-desc">
                        <span class="product-price">
                          {product.price}
                        </span>
                        <small class="text-muted">Agrigenotyping</small>
                        <div class="product-name">{product.productName}</div>
                        <div class="small m-t-xs">
                                 {product.productDescription}                        </div>
                        <div class="m-t text-righ mt-3">
                        <a href="#" type="button" class="btn btn-primary btn-sm" onClick={setProduct}>Add To Cart<i class="fa fa-long-arrow-right"></i></a>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#Mols_DNA_i1" class="btn btn-secondary btn-sm mx-2" >Read More</button>
                        </div>
    
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="Mols_DNA_i1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{product.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                          <div class="modal-body">
                            <p> {product.productDescription} </p>
                          </div>
                          <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Add To Cart</button>
                          </div>
                            </div>
                          </div>
                        </div>
    
    
                    </div>
                </div>
            </div>
        </div>
        );
     })}
    </div>
</div>
</div>
    </div>
  )
}

export default Agrigenotyping
