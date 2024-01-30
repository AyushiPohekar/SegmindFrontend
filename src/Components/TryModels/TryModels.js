import React from "react";
import "./TryModels.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TryModels = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const getData = async () => {
    return await axios
      .get("http://localhost:8000/wrapper/findAllModel")
      .then((res) => res);
  };
  useEffect(() => {
    getData().then((data) => setData(data.data.models));
  });
  const handleOnClick = (element) => {
    navigate(`/models/type`, { state: { elemert: element } });
  };

  const desiredOrder = ["Segmind-Vega", "Segmind-VegaRT"];

  data?.sort((a, b) => {
    const indexA = desiredOrder.indexOf(a.title);
    const indexB = desiredOrder.indexOf(b.title);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return 0;
  });

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
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Controllenet"
              className="input"
              style={{ marginRight: "30px", width: "230px" }}
            />
          </div>
        </div>
      </div>
      <div className="imgDiv">
        {data.slice(0, 2).filter((eq) => {
              if (query === "") {
                return eq;
              } else if (eq.title.toLowerCase().includes(query.toLowerCase())) {
                return eq;
              }
            }).map((element) => {
          return (
            <div>
              <img
                src={element.default_image_output}
                onClick={() => handleOnClick(element)}
              />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "20px" }}>
        <div className="imgdiv">
          {data
            .slice(2)
            .filter((eq) => {
              if (query === "") {
                return eq;
              } else if (eq.title.toLowerCase().includes(query.toLowerCase())) {
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
  );
};

export default TryModels;
