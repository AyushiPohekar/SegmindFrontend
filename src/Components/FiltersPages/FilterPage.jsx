import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FilterPage = () => {
  const ControlnetsArray = ["controlnet-openpose"];
  const location = useLocation();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [models, setModels] = useState(location.state.models);
  const [filterdata, setFilterdata] = useState([]);
  function getDetails(modelSlug) {
    return axios
      .get(`http://localhost:8000/wrapper/findOneModel?name=${modelSlug}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(
          `Error fetching details for model ${modelSlug}: ${error}`
        );
        throw error;
      });
  }
  const fetchData = async () => {
    const filteredModels = [];

    for (const model of models) {
      try {
        const details = await getDetails(model.slug);

        model.details = details.model;

        if (
          model.details &&
          model.details.type === location.state.desiredType
        ) {
          filteredModels.push(model);
        }
      } catch (error) {
        console.error(
          `Error fetching details for model ${model.slug}: ${error}`
        );
      }
    }

    setFilterdata(filteredModels);
  };

  useEffect(() => {
    fetchData();
  }, [location.state.desiredType]);
  const handleOnClick = (element) => {
    navigate(`/models/type`, { state: { elemert: element } });
  };
  const decideType = (desiredType) => {
    navigate(`/${desiredType}`, {
      state: { models: models, desiredType: desiredType },
    });
  };
  return (
    <>
      <div className="container">
        <div className="titleContent">
          <h1>Models</h1>
          <p>
            Here are some popular generative model APIs that you can use in your
            application.
          </p>
          <div className="titlebutton">
            <div>
              <button
                className="filterbtns"
                onClick={() => decideType("textToImage")}
              >
                Text To Image
              </button>
              <button
               className="filterbtns"
                onClick={() => decideType("imageToImage")}
              >
                Image to Image
              </button>
              <button
              className="filterbtns"
                onClick={()=>decideType("imageToImage")}
              >
                Utility Functions
              </button>
              <button
              className="filterbtns"
                onClick={()=>decideType("imageToImage")}
              >
                Controlnets
              </button>
            </div>
            <div>
              <input
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Controllenet"
                className="input"
                style={{ marginRight: "30px", width: "230px" }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div className="imgdiv">
            {filterdata

              .filter((eq) => {
                if (query === "") {
                  return eq;
                } else if (
                  eq.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return eq;
                }
              })
              .map((element) => {
                return (
                  <div style={{ marginTop: "15px" }}>
                    <img
                      src={element.default_image_output}
                      onClick={() => handleOnClick(element)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
