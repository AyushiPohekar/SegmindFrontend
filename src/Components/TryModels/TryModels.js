import React from "react";
import "./TryModels.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TryModels = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    return await axios
      .get(
        "http://localhost:8000/wrapper/findAllModel"
      )
      .then((res) => res);
  };
  useEffect(() => {
    getData().then((data) => setData(data.data.models));
  });
  const handleOnClick = (element) => {
    navigate(`/models/type`, { state: { elemert: element } });
  };
  return (
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
              style={{
                background: "white",
                color: "purple",
                border: "1px solid purple",
                borderRadius: "15px",
                height: "25px",
                cursor: "pointer",
              }}
            >
              Text To Image
            </button>
            <button
              style={{
                marginLeft: "30px",
                background: "white",
                color: "purple",
                border: "1px solid purple",
                borderRadius: "15px",
                height: "25px",
                cursor: "pointer",
              }}
            >
              Image to Image
            </button>
            <button
              style={{
                marginLeft: "30px",
                background: "white",
                color: "purple",
                border: "1px solid purple",
                borderRadius: "15px",
                height: "25px",
                cursor: "pointer",
              }}
            >
              Utility Functions
            </button>
            <button
              style={{
                marginLeft: "30px",
                background: "white",
                color: "purple",
                border: "1px solid purple",
                borderRadius: "15px",
                height: "25px",
                cursor: "pointer",
              }}
            >
              Controlnets
            </button>
          </div>
          <div>
            <input
              placeholder="Controllenet"
              className="input"
              style={{ marginRight: "30px", width: "230px" }}
            />
          </div>
        </div>
      </div>
      <div className="imgDiv">
        <div>
          <img
            src="https://segmind-sd-models.s3.amazonaws.com/outputs/segmind-vega.png"
            alt="segemnd-vega"
          />
        </div>
        <div>
          <img
            src="https://segmind-sd-models.s3.amazonaws.com/outputs/ssd-vega-rt.png"
            alt="segmend-vega2"
            style={{ marginRight: "20px", marginLeft: "30px" }}
          />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div className="imgdiv">
          {data.map((element) => {
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
  );
};

export default TryModels;
