import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    itemCode: '',
    description: '',
    quantity: 0,
    price: 0.0,
    subcategory: {
      id:''
    },
    category: {
      id: ''
    },
  });
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [subcategory_id, setSubcategory_id] = useState('')

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // const fetchSubcategories = async (categoryId) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/api/subcategories?categoryId=${categoryId}`);
      
  //     setSubcategories(response.data);
  //     // console.log(response.data[3]['category']['id'],"anhnd")
  //     var i=0;
  //     for(i=0;i<=response.data.length;i++){
  //       if(response.data[i].category['id'] == categoryId){
  //         setSubcategory_id(response.data[i].id)
  //         }
  //     }
  //     // setSubcategory_id(response.data[0]['id'])
  //   } catch (error) {
  //     console.error('Error fetching subcategories:', error);
  //   }
  // };

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/subcategories?categoryId=${categoryId}`);
      
      setSubcategories(response.data);
      console.log(response.data[2].id,'jhbdshb');
      console.log(response.data,'khjdfhjd');
      
      for (let i = 0; i <= response.data.length; i++) {
        if (response.data[i]['category']['id'] == categoryId) {
          setSubcategory_id(response.data[i].id);
          console.log(response.data[i].id,'hnjnjn');
          // Once you find a match, you may want to break out of the loop
          break;
        }
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };
  

  // const handleChange = (e) => {
  //   setProduct({ ...product, [e.target.name]: e.target.value });
  //   if (e.target.name === 'categoryId') {
  //     fetchSubcategories(e.target.value);
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.name === 'categoryId') {
      
      setProduct({
        ...product,
        category: { id: e.target.value },
       
      });
      fetchSubcategories(e.target.value);
      console.log('id',subcategory_id)
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value, subcategory: {id:subcategory_id}});


    }
  };

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/products', product);
      console.log('Product added:', response.data);
      console.log(product,'abcd')
      // You can redirect or perform other actions after adding a product
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='mt-5 pt-5'>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Item Code:</label>
        <input type="text" name="itemCode" value={product.itemCode} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required />

        <label>Quantity:</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" step="0.01" name="price" value={product.price} onChange={handleChange} required />

        <label>Category:</label>
        <select name="categoryId" value={product.categoryId} onChange={handleChange} required>
          <option value="" disabled>Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>

        <label>Subcategory:</label>
        <select name="subcategoryId" value={product.subcategoryId} onChange={handleChange} required>
          <option value="" disabled>Select a subcategory</option>
          {subcategories.map(subcategory => (
            <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
          ))}
        </select>

        <button type="submit">Add Product</button>
      </form>
      {/* Add Product Page*/}
{/* <div class="box">
       {/*  */}
  {/* <div class="container mt-5">				
        <div class="section-title text-center">
        <h1 class="display-5 mt-5"><strong>Product</strong></h1></div>

                      
       




        


             <div class="section-title">
             <h1 class="display-6 mt-5">Add Product</h1></div>

<form onSubmit={handleSubmit}>

<div class="row mb-4">

  <div class="col">
    <div class="form-outline">
    <input type="text" id="form6Example1" class="form-control" name="itemCode" value={product.itemCode} onChange={handleChange} required />
      <label class="form-label" for="form6Example1">Item Code</label>
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
    <input type="text" id="form6Example2" class="form-control" name="description" value={product.description} onChange={handleChange} required />
      
      <label class="form-label" for="form6Example2">Description</label>
    </div>
  </div>

</div>

<div class="row mb-4">

<div class="col">
<div class="form-outline ">
<input type="number"  id="form6Example6" placeholder="$" class="form-control" step="0.01" name="price" value={product.price} onChange={handleChange} required />
  <label class="form-label" for="form6Example6">Price</label>
</div>
</div>

<div class="col">
<div class="form-outline ">
<input type="number" id="form6Example6" class="form-control" name="quantity" value={product.quantity} onChange={handleChange} required />
  <input type="text" id="form6Example6" class="form-control"/> */}
  {/* <label class="form-label" for="form6Example6">Icon</label>
</div>
</div>

</div>

<div class="row mb-4">

  <div class="col">
   <div class="form-outline">
    <select name="categoryId" class="form-control" value={product.categoryId} onChange={handleChange} required>
          <option value="" disabled>Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select> */}

            {/* <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value=""></option>
        </select>  */}
              {/* <label class="form-label" for="form6Example2">Category</label>
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
    <select name="subcategoryId" class="form-control" value={product.subcategoryId} onChange={handleChange} required>
          <option value="" disabled>Select a subcategory</option>
          {subcategories.map(subcategory => (
            <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
          ))}
        </select> */} 
            {/* <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value=""></option>
        </select>  */}
              {/* <label class="form-label" for="form6Example2">Sub-Category</label>
    </div>
  </div>
  
</div>

      <button type="submit" class="btn btn-primary btn-block mb-4">Add Product</button>

</form>


</div>
</div> */}
    </div>
  );
};

export default AddProduct;
