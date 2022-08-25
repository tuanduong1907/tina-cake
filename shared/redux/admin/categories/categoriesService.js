import axios from "axios";


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Create
const createCategory = async (reqData) => {
  const response = await axios.post("/category/RequestCreateCategory", reqData, config);
  const data = response.data.Data;
  const status = response.data.ResultStatus;
  return {
    data,
    status,
  };
};

const getCategories = async () => {
  const response = await axios.get('/category/GetCategories', config);
  const data = response.data.Data;
  const status = response.data.ResultStatus;
  return {
    data,
    status,
  };
};

const updateCategory = async (id, reqData) => {
  const response = await axios.put(`/category/${id}`, reqData, config);
  const data = response.data.Data;
  const status = response.data.ResultStatus;
  return {
    data,
    status,
  };
};

const deleteCategory = async (id) => {
  const response = await axios.delete(`/category/${id}`, config);
  const data = response.data.Data;
  const status = response.data.ResultStatus;
  return {
    data,
    status,
  };
};

const categoriesService = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory
};

export default categoriesService;
