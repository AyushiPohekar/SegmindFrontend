import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ModelsPage from "./Components/ModelsPage/ModelsPage";

import Navbar from "./CommonComponents/Navbar/Navbar";

import Footer from "./CommonComponents/Navbar/Footer/Footer";
import TryModels from "./Components/TryModels/TryModels";
import Type from "./Components/Type/Type";
import TexttoImage from "./Components/Type/TexttoImage";
import ImageToImage from "./Components/Type/ImageToImage";

function App() {
  return (
    <>
      <Navbar />
<Routes>
      <Route path="/" element={<ModelsPage />} />
      
        {/* <Route path="/models" element={<ModelsPage />} /> */}
        <Route path="/models" element={<TryModels />} />
        <Route path="/models/type" element={<Type />} />
        <Route path="/models/texttoImage/:name" element={<TexttoImage/>} />
        <Route path="/models/imageToImage/:name" element={<ImageToImage />} />
         
     
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
