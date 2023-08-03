import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import Footer from "./components/Footer";
import searchImage from "./api";

function App() {
  const [images,setImages]=useState([]);
  const handleSubmit = async (searchTerm) => {
    const results = await searchImage(searchTerm);
    setImages(results);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
