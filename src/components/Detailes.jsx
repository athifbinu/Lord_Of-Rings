import React, { useEffect, useState } from "react";
import "../Styles/Detailes.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ENV } from "../utlits/Constants";

const Detailes = () => {
  const { _id } = useParams();
  console.log("id", _id);

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    axios
      .get(`${ENV.URL}/character/${_id}`, {
        headers: {
          Authorization: `Bearer ${ENV.TOKEN}`,
        },
      })
      .then((res) => {
        const data = res.data.docs;
        setCharacter(data);
        console.log(data, "data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
       {
         character.map((item,index)=>{
            return(
              <div key={index} className="hero-section">
              <div className="main-section">
                <div className="left-section">
                  <p>Name:</p>
                  <p>WikiUrl: </p>
                  <p>Race: </p>
                  <p>Gender: </p>
                  <p>Height: </p>
                  <p>Hair: </p>
                  <p>Realm: </p>
                  <p>Birth:</p>
                  <p>Spouse: </p>
                  <p>Death: </p>
                </div>
      
                <div className="right-section">
                  <p>{item.name}</p>
                  <p>{item.wikiUrl}</p>
                   <p>{item.race}</p>
                   <p>{item.gender}</p>
                   <p>{item.hair}</p>
                   <p>{item.realm}</p>
                   <p>{item.birth}</p>
                   <p>{item.spouse}</p>
                   <p>{item.death}</p>
                </div>
              </div>
      
              <div className="close-btn">
                <Link to="/home">
                  <button>Close</button>
                </Link>
              </div>
            </div>
            )
         })
       }
      
      <hr/>
      </>

  );
};

export default Detailes;
