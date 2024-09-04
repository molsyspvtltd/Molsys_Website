import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Service.css';

function WholeGenomeSequencing({ service, image, price, description }) {
  const [product, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const products = [localStorage.getItem('product')];
    const productItems = JSON.parse(products);
    setProducts(productItems);
  }, []);

  const setProduct = () => {
    // Check if the user is logged in
    const isLoggedIn = checkLoginStatus(); // Replace with your actual login check logic

    if (!isLoggedIn) {
      // If user is not logged in, redirect to login page
      history.push('/login'); // Replace with your actual login page route
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
      <div className="box">
        <div className="container mt-5">
          <div className="section-title text-center">
        <h1 class="display-5 mt-5"><strong>Whole Genome Sequencing (<em>de novo</em>)</strong></h1></div>
        <p><em>de novo</em> Whole Genome Sequencing is a groundbreaking Genetic Analysis Technique that involves mapping an organism's entire DNA Sequence without relying on a reference Genome. It's like creating a brand-new jigsaw puzzle from scratch, 
            assembling all the pieces to reveal the Complete Genetic blueprint of an Organism. This method is indispensable for studying novel Species, identifying rare Genetic variations, and unraveling complex Genomes where reference data is 
            unavailable.<br></br><br></br> 
            <em>de novo</em> Sequencing is a vital tool in genomics, supporting diverse applications in Evolutionary Biology, Disease Research, and understanding the fundamental Genetic code of life. It opens new doors to exploring uncharted
             Genetic Territory and Fostering breakthrough Discoveries.</p>

             <div className="section-title mt-5">
            <h1 className="display-5 mt-5">Services</h1>
          </div>

          <div className="row">
            {product.map((product) => (
              <div className="col-md-3 mb-5 mt-5 pt-5" key={product.id}>
                <div className="ibox-2">
                  <div className="ibox-content-2 product-box-2">
                    <div className="product-imitation">
                      [ INFO ]
                    </div>
                    <div className="product-desc">
                      <span className="product-price">
                        {product.price}
                      </span>
                      <small className="text-muted">Whole Genome Sequencing  (<em>de novo</em>)</small>
                      <div className="product-name">{product.productName}</div>
                      <div className="small m-t-xs">
                        {product.productDescription}
                      </div>
                      <div className="m-t text-righ mt-3">
                        <a href="#" type="button" className="btn btn-primary btn-sm" onClick={setProduct}>
                          Add To Cart<i className="fa fa-long-arrow-right"></i>
                        </a>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#Mols_DNA_i1" className="btn btn-secondary btn-sm mx-2" >Read More</button>
                      </div>

                      <div className="modal fade" id="Mols_DNA_i1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <p>{product.productDescription}</p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Add To Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default WholeGenomeSequencing
