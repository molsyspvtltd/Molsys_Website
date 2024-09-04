import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddSubcategory = () => {
  const [subcategory, setSubcategory] = useState({
    name: '',
    description: '',
    category: {
      id: ''
    },
  });
  const [categories, setCategories] = useState([]);

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

  const handleChange = (e) => {
    if (e.target.name === 'categoryId') {
      setSubcategory({
        ...subcategory,
        category: { id: e.target.value },
      });
    } else {
      setSubcategory({ ...subcategory, [e.target.name]: e.target.value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/subcategories', subcategory);
      console.log('Subcategory added:', response.data);
      // You can redirect or perform other actions after adding a subcategory
    } catch (error) {
      console.error('Error adding subcategory:', error);
    }
  };

  return (
    <div className='mt-5 pt-5'>
      {/* <h2>Add Subcategory</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={subcategory.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={subcategory.description} onChange={handleChange} required />

        <label>Category:</label>
        <select name="categoryId" value={subcategory.categoryId} onChange={handleChange} required>
          <option value="" disabled>Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>

        <button type="submit">Add Subcategory</button>
      </form> */}
      <div class="section-title">
             <h1 class="display-6 mt-5">Add Sub-Category</h1></div>

<form onSubmit={handleSubmit}>

<div class="row mb-4">

  <div class="col">
    <div class="form-outline">
    <input type="text" class="form-control" name="name" value={subcategory.name} onChange={handleChange} required />
      {/* <input type="text" id="form6Example1" class="form-control"/> */}
      <label class="form-label" for="form6Example1">Name</label>
    </div>
  </div>
  <div class="col">
<div class="form-outline ">
  <input type="text" id="form6Example6" class="form-control"/>
  <label class="form-label" for="form6Example6">Icon</label>
</div>
</div>
</div>

<div class="row mb-4">

<div class="col">
    <div class="form-outline">
    <textarea name="description" class="form-control" value={subcategory.description} onChange={handleChange} required />
      {/* <input type="text" id="form6Example2" class="form-control"/> */}
      <label class="form-label" for="form6Example2">Description</label>
    </div>
  </div>

<div class="col mb-4">
   <div class="form-outline">
   <select name="categoryId" class="form-control" value={subcategory.categoryId} onChange={handleChange} required>
          <option value="" disabled>Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
            {/* <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value=""></option>
        </select>  */}
              <label class="form-label" for="form6Example2">Category</label>
    </div>
  </div>

  </div> 

  <button type="submit" class="btn btn-primary btn-block mb-4">Add Sub-Category</button>

</form>
    </div>
  );
};

export default AddSubcategory;
