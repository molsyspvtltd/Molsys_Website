
// import React,{useState} from 'react';
// import { Paragraph } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';
// import "../style/Service.css" 
// import * as Icon from 'react-bootstrap-icons'


// function ServiceItems({image,name,price,description,paragraph}) {

//   const [myValue, setMyValue] = useState([]);  
//   const setProduct =()=>{
//     console.log(image,name,price,description,paragraph);
//   };

//   return (
   
//     <div className='serviceItem'>
      
//       <div class="col mb-5">
//         <div class="ibox-1">
//             <div class="ibox-content-1 product-box-1">
//                 <div class="product-imitation">
//                   <Icon.Activity style={{height:'50px', width:'50px', color:'gold'}} />
//                 {/* <div style={{backgroundImage: `url(${image})`}}></div> */}
//                 {/* {image} */}
//                 </div>
//                 <div class="product-desc">
//                     <span class="product-price">
//                         ${price} 
//                     </span>
//                     <small class="text-muted">WHOLE GENOME SEQUENCING (<em>de novo</em>)</small>
//                     <div class="product-name">{name}</div>
//                     <div class="small m-t-xs">
//                     {description}
//                     {/* •Identification of Pathogenic Organisms.<br></br>
//                     •Genome Projects from Population Genomics. */}
//                     </div>
//                     <div class="m-t text-righ mt-3">
//                     <a  type="button" class="btn btn-primary btn-sm" onClick={()=>{
//                       console.log("poda funde")
//                     }} 
//                     >Add To Cart<i class="fa fa-long-arrow-right" ></i></a>
//                     <button type="button" data-bs-toggle="modal" data-bs-target="#MolS_WGS_17" class="btn btn-secondary btn-sm mx-2" >Read More</button>
//                     </div>

//                     {/* <!-- Modal --> */}
//                     <div class="modal fade" id="MolS_WGS_17" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                       <div class="modal-dialog">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                             <h5 class="modal-title" id="exampleModalLabel">{name}</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                       <div class="modal-body">
//                         {paragraph}
//                       </div>
//                       <div class="modal-footer">
//                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                       <a type="button" class="btn btn-primary" >Add To Cart</a>
//                       </div>
//                         </div>
//                       </div>
//                     </div>


//                 </div>
//             </div>
//         </div>
//     </div>

//     </div>
    
    
//   )
// }

// export default ServiceItems



import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

function ServiceItems({ image, service, price, description, paragraph }) {
  const setProduct = () => {
    // Store product information in local storage
    const productInfo = {
     service: service,
      image: image,
      price: price
    };

    try {
      // Get existing cart items from local storage
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      // Add the new product to the cart
      const updatedCartItems = [...existingCartItems, productInfo];

      // Update local storage with the updated cart items
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      console.log("Product added to cart:", productInfo);

      // Display success alert
      alert("Your product was successfully added to the cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error);

      // Display error alert
      alert("Error adding product to cart. Please try again.");
    }
  };

  return (
    <div className='serviceItem'>
      <div className="col mb-5">
        <div className="ibox-1">
          <div className="ibox-content-1 product-box-1">
            <div className="product-imitation">
              <Icon.Activity style={{ height: '50px', width: '50px', color: 'gold' }} />
            </div>
            <div className="product-desc">
              <span className="product-price">${price}</span>
              <small className="text-muted">WHOLE GENOME SEQUENCING (<em>de novo</em>)</small>
              <div className="product-name">{service}</div>
              <div className="small m-t-xs">
                {description}
              </div>
              <div className="m-t text-righ mt-3">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={setProduct}
                >
                  Add To Cart<i className="fa fa-long-arrow-right"></i>
                </button>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#MolS_WGS_17"
                  className="btn btn-secondary btn-sm mx-2"
                >
                  Read More
                </button>
              </div>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="MolS_WGS_17" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* ... (rest of your modal code) */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItems;
