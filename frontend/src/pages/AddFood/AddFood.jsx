import { useEffect, useState } from "react";
import axios from "../../axios";
import tagDisplayNames from "./Tags";

const AddFoodForm = () => {

  const getTagDisplayName = (tagName) => {
    return tagDisplayNames[tagName] || tagName; // Default to original name if no mapping found
  };
  
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    image: null,
    tagIds: [],
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get("/tags");
        if (response.data) {
          setTags(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTags();
  }, []);

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

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    const tagId = parseInt(value, 10);
    setFoodData((prevData) => ({
      ...prevData,
      tagIds: checked
        ? [...prevData.tagIds, tagId]
        : prevData.tagIds.filter((id) => id !== tagId),
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
    foodData.tagIds.forEach((tagId) => {
      formData.append("tagIds", tagId);
    });

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
          tagIds: [],
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
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Food Name
          </label>
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
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
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
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
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
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
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
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
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

        {/* Tags Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Tags
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {tags.map((tag) => (
              <label key={tag.id} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={tag.id}
                  onChange={handleTagChange}
                  checked={foodData.tagIds.includes(tag.id)}
                  className="form-checkbox"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {tag.tagName}
                </span>
              </label>
            ))}
          </div>
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
