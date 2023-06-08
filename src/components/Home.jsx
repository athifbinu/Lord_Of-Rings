import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import axios from "axios";
import { ENV } from "../utlits/Constants";

const Home = () => {

  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState('');
  const [race, setRace] = useState([]);
  const [gender, setGender] = useState('any');
  const [sort, setSort] = useState('name');


  useEffect(() => {
    fetchCharecters();
  }, []);

  const fetchCharecters = async () => {

    axios
      .get(`${ENV.URL}/character`, {
        headers: {
          Authorization: `Bearer ${ENV.TOKEN}`,
        },
      })
      .then((res) => {
        const data = res.data.docs;

        console.log("res", data);

        setCharacters(data);
      
      })
      .catch((err) => {
        console.log("err", err);
      });
  };


  const getCharacters = async (page, limit, name, race, gender, sort) => {
    try {
      const response = await setCharacters.get('/character', {
        params: {
          page,
          limit,
          name,
          race,
          gender,
          sort,
        },
      });
      return response.data.docs;
    } catch (error) {
      console.error('Error while fetching characters:', error);
      throw error;
    }
  };
  
  const getCharecterById=async(charecterByid)=>{
    try{
      const response = await setCharacters.get(`/character/${charecterByid}`);
      return response.data;
    }catch (err){
      console.error(`Error while fetching character ${charecterByid}:`, err);
      throw err;
    }
  }







  




  

  return (
    <div className="container">

      <div className="search-form">
        <div className="input-line">
          <label>Search</label>
          <input type="text" className="input-box" placeholder="by name" />
           <div>
           <label>Sort By</label>
          <input type="text" className="input-box" placeholder="by name (asc/desc)"/>

           </div>
        </div>
        <div className="input-line">
          <label>Race</label>
          <input type="text" className="input-box" placeholder="list of races,multiselections" />
          <label>Gender</label>
          <input type="text" className="input-box" placeholder="male/female/any"/>
      
          <button className="search-btn">Submit</button>
        </div>
      </div>

       <hr/>

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Race</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <td>1</td>
          <td>Athif</td>
          <td>Human</td>
          <td>Male</td>
          <td>Detailes</td>
        </tbody>

        <tbody>
          <td>1</td>
          <td>Athif</td>
          <td>Human</td>
          <td>Male</td>
          <td>Detailes</td>
        </tbody>

        <tbody>
          <td>1</td>
          <td>Athif</td>
          <td>Human</td>
          <td>Male</td>
          <td>Detailes</td>
        </tbody>
      </table>
      
        <hr/>
      <div className="footer-section">
           <div className="footer-btn">
               <button>1</button>
               <button>2</button>
               <button>9</button>
           </div>

          <div className="limit-section">
            <label>Limit</label>
            <button>10</button>
          </div>
        
   
      </div>
      <hr/>
    </div>
  );
};

export default Home;
