import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ModelsPage from "./Components/ModelsPage/ModelsPage";

import Navbar from "./CommonComponents/Navbar/Navbar";
import Aimodels from "./Components/Aimodels/Aimodels";
import Footer from "./CommonComponents/Navbar/Footer/Footer";
import TryModels from "./Components/TryModels/TryModels";
<<<<<<< HEAD
import ApiKey from "./Components/Console/ApiKey";
import Console from "./Components/Console/Console";
import Usage from "./Components/Console/Usage";
import Billing from "./Components/Console/Billing";
import TrainingModel from "./Components/Console/TrainingModel";
import TrainingHub from "./Components/Console/TrainingHub";
import ModelHub from "./Components/Console/ModelHub";
import Referalss from "./Components/Console/Referalss";

=======
import Type from "./Components/Type/Type";
import TexttoImage from "./Components/Type/TexttoImage";
import ImageToImage from "./Components/Type/ImageToImage";
import FilterPage from "./Components/FiltersPages/FilterPage";
>>>>>>> 2297bb51bd93e259ed73fc9ed264e6b23d51006e

function App() {
  return (
    
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<ModelsPage />} />
<<<<<<< HEAD
=======
      
        {/* <Route path="/models" element={<ModelsPage />} /> */}
        <Route path="/models" element={<TryModels />} />
        <Route path="/models/type" element={<Type />} />
        <Route path="/models/texttoImage/:name" element={<TexttoImage/>} />
        <Route path="/models/imageToImage/:name" element={<ImageToImage />} />
        <Route path="/:desiredType" element={<FilterPage />} />
         
>>>>>>> 2297bb51bd93e259ed73fc9ed264e6b23d51006e
     
      <Route path="/models" element={<TryModels />} />
       
      <Route path="/models/:name" element={<Aimodels />} />
      <Route path='/console/key' element={<ApiKey/>}/>
      <Route path='/console/usage' element={<Usage/>}/>
      <Route path='/console/billing' element={<Billing/>}/>
      <Route path='/console/trainingModel' element={<TrainingModel/>}/>
      <Route path='/console/hub' element={<TrainingHub/>}/>
      <Route path='/console/modelhub' element={<ModelHub/>}/>
      <Route path='/console/referals' element={<Referalss/>}/>

    </Routes>
    <Footer/>
  </>
    
    
  );
}

export default App;

