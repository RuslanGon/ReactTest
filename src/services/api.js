import axios from "axios";

export const reguestProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data;
};

export const reguestProductsByQuery = async (query = '') => {
  const { data } = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
  return data;
};