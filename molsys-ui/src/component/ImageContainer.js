import React, { useRef , useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../assets/Yenepoya_bg.png";
import Image2 from "../assets/agri_bg.png";
import Image3 from "../assets/cpcri_bg.png";
import Image4 from "../assets/icar_bg.png";
import Image5 from "../assets/iihr_bg.png";
import Image6 from "../assets/iiser_bg.png";
import Image7 from "../assets/itc_bg.png";
import Image8 from "../assets/jnu_bg.jpg";
import Image9 from "../assets/mlac_bg.png";
import Image10 from "../assets/ndri_bg.png";
import Image11 from "../assets/nh_bg.png";
import Image12 from "../assets/niab_bg.png";
import Image13 from "../assets/nipb_bg.png";
import Image14 from "../assets/pes_bg.png";
import Image15 from "../assets/ramaiah_bg.png";
import Image16 from "../assets/uod_bg.png";
import Image17 from "../assets/iios_bg.png"
// const images = [Image1, Image2, Image3,, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17];
  

const ImageContainer = () => {
    // Ref for the container to control scrolling
    const containerRef = useRef(null);
  
    // Images array
    const images = [Image1, Image2, Image3,, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17];
    // Effect to handle the animation loop
    useEffect(() => {
      const container = containerRef.current;
      let scrollAmount = 3;
  
      const scrollImages = () => {
        if (container) {
            container.scrollLeft += 1; // Adjust the scroll speed as needed
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
              container.scrollLeft = 0;
            }
          }
        };
    
      const intervalId = setInterval(scrollImages, 50); // Change the interval as needed
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="image-container"
              ref={containerRef}
              style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                height: '100px'
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  style={{
                    width: '100%', // Make images fill the container
                    height: 'auto', // Maintain the aspect ratio
                    marginRight: '50px', // Adjust spacing between images
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ImageContainer;

