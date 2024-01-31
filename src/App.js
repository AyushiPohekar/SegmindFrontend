import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ModelsPage from "./Components/ModelsPage/ModelsPage";

import Navbar from "./CommonComponents/Navbar/Navbar";

import Footer from "./CommonComponents/Navbar/Footer/Footer";
import TryModels from "./Components/TryModels/TryModels";
import ApiKey from "./Components/Console/ApiKey";
import Console from "./Components/Console/Console";
import Usage from "./Components/Console/Usage";
import Billing from "./Components/Console/Billing";
import TrainingModel from "./Components/Console/TrainingModel";
import TrainingHub from "./Components/Console/TrainingHub";
import ModelHub from "./Components/Console/ModelHub";
import Referalss from "./Components/Console/Referalss";

import Type from "./Components/Type/Type";
import TexttoImage from "./Components/Type/TexttoImage";
import ImageToImage from "./Components/Type/ImageToImage";
import FilterPage from "./Components/FiltersPages/FilterPage";
import Signup from "./Components/Login/Signup";
import Login from "./Components/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbartwo from "./CommonComponents/Navbartwo/Navbartwo";


function App() {
  return (
    
    <>
    <Navbartwo/>
    {/* <Navbar /> */}

    <Routes>
      <Route path="/" element={<ModelsPage />} />
      
        {/* <Route path="/models" element={<ModelsPage />} /> */}
        <Route path="/models" element={<TryModels />} />
        <Route path="/models/type" element={<Type />} />
        <Route path="/models/texttoImage/:name" element={<TexttoImage/>} />
        <Route path="/models/imageToImage/:name" element={<ImageToImage />} />
        <Route path="/:desiredType" element={<FilterPage />} />
         
     
      <Route path="/models" element={<TryModels />} />
       
   
      <Route path='/console/key' element={<ApiKey/>}/>
      <Route path='/console/usage' element={<Usage/>}/>
      <Route path='/console/billing' element={<Billing/>}/>
      <Route path='/console/trainingModel' element={<TrainingModel/>}/>
      <Route path='/console/hub' element={<TrainingHub/>}/>
      <Route path='/console/modelhub' element={<ModelHub/>}/>
      <Route path='/console/referals' element={<Referalss/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    <Footer/>
    <ToastContainer />
  </>
    
    
  );
}

export default App;

