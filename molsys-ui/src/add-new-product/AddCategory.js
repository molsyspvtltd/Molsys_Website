import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/categories', category);
      console.log('Category added:', response.data);
      // You can redirect or perform other actions after adding a category
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className='mt-5 pt-5'>
      {/* <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={category.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={category.description} onChange={handleChange} required />

        <button type="submit">Add Category</button>
      </form> */}
       <div class="section-title">
             <h1 class="display-6">Add Category</h1></div>



<form onSubmit={handleSubmit}>

<div class="row mb-4">

  <div class="col">
    <div class="form-outline">
    <input type="text" name="name" class="form-control" value={category.name} onChange={handleChange} required />
      {/* <input type="text" id="form6Example1" class="form-control"/> */}
      <label class="form-label" for="form6Example1">Name</label>
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
    <textarea name="description" class="form-control" value={category.description} onChange={handleChange} required />

      {/* <input type="text" id="form6Example2" class="form-control"/> */}
      <label class="form-label" for="form6Example2">Description</label>
    </div>
  </div>

</div>

<button type="submit" class="btn btn-primary btn-block mb-4">Add Category</button>

</form>
    </div>
  );
};

export default AddCategory;
