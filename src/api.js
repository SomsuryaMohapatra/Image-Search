import axios from "axios";

const searchImage = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID viFky3pCw5VBxBr6CMkaHysl3kLgAWjIW6R-1yqLB-o",
    },
    params: {
      query: searchTerm,
    },
  });
  
  return response.data.results;
};

export default searchImage;