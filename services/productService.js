
// const BASE_API_URL = "https://my-alura-geek-api.vercel.app/product";
const API_STARWARS = "http://localhost:3000/starwars";
const API_CONSOLAS = "http://localhost:3000/consolas";
const API_DIVERSOS = "http://localhost:3000/diversos";

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

export const productServices = {
  starwars: () => fetchData(`${API_STARWARS}`).then(data => data),
  consolas: () => fetchData(`${API_CONSOLAS}`).then(data => data),
  diversos: () => fetchData(`${API_DIVERSOS}`).then(data => data)
};
