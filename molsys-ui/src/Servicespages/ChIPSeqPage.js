import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Service.css';

function ChIPSeqPage({ service, image, price, description }) {
  const [product, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const products = [localStorage.getItem('product')];
    const productItems = JSON.parse(products);
    setProducts(productItems);
  }, []);

  const setProduct = () => {
    // Check if the user is logged in
    const isLoggedIn = checkLoginStatus(); // Assuming you have a function to check login status

    if (!isLoggedIn) {
      // If user is not logged in, redirect to login page
      history.push('/login');
      return;
    }

    const productInfo = {
      service: service,
      image: image,
      price: price,
      description: description,
    };

    try {
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      // Add the new product to the cart
      const updatedCartItems = [...existingCartItems, productInfo];

      // Update local storage with the updated cart items
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      console.log('Product added to cart:', productInfo);

      // Display success alert
      alert('Your product was successfully added to the cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);

      // Display error alert
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
        <h1 class="display-5 mt-5"><strong>ChIP Sequencing</strong></h1></div>
        <p>ChIP-Seq (Chromatin Immunoprecipitation Sequencing) is a revolutionary genomics technique used to investigate protein-DNA interactions at a genome-wide scale. 
            It combines ChIP, which enriches DNA fragments bound by specific proteins, with high-throughput sequencing. By mapping where proteins like transcription factors or
             histones bind to DNA, ChIP-Seq provides insights into gene regulation, epigenetics, and chromatin structure. Researchers use ChIP-Seq to identify enhancers, promoters, 
             and other regulatory elements, gaining a deeper understanding of cellular processes, disease mechanisms, and gene expression.<br></br><br></br> 
             This method has transformed our ability to
            decipher the intricate molecular events that control gene activity, impacting fields like cancer research and developmental biology.</p>

             <div class="section-title mt-5">
             <h1 class="display-5 mt-5">Services</h1></div>

    <div class="row">
    {product.map((product) => {
        return (
            <div class="col-md-3 mb-5 mt-5 pt-5">
            <div class="ibox-1">
                <div class="ibox-content-2 product-box-2">
                    <div class="product-imitation">
                        [ INFO ]
                    </div>
                    <div class="product-desc">
                        <span class="product-price">
                          {product.price}
                        </span>
                        <small class="text-muted">ChIP Sequencing</small>
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

export default ChIPSeqPage
