import { useState } from "react";
import axios from '../../axios';

const AddFoodForm = () => {
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    image: null,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFoodData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", foodData.name);
    formData.append("description", foodData.description);
    formData.append("location", foodData.location);
    formData.append("price", foodData.price);
    formData.append("file", foodData.image);

    try {
      const response = await axios.post("/foods/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setSuccess("Food added successfully!");
        setError(null);
        setFoodData({
          name: "",
          description: "",
          location: "",
          price: "",
          image: null,
        });
      }
    } catch (err) {
      setError("Failed to add food. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Food</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={foodData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={foodData.description}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={foodData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={foodData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFoodForm;
