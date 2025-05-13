import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
import searchRequest from "./api";

export default function App() {
  const [imageCards, setImageCards] = useState([]);

  const handleSearch = async (newTopic) => {
    const results = await searchRequest(newTopic);
    setImageCards(results);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Loader />
      {imageCards.length > 0 && <ImageGallery images={imageCards} />}
      <ErrorMessage />
    </>
  );
}
