import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import axios from "axios";
import { ENV } from "../utlits/Constants";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import LimitTags from "./Test";
import { render } from "@testing-library/react";
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
  },[limit]);

  const fetchCharecters = async () => {

    axios
      .get(`${ENV.URL}/character`, {
        headers: {
          Authorization: `Bearer ${ENV.TOKEN}`,
          
          
        },
        params:{
          limit:limit,
          page:page
        }
        
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




  const handleSearch=e=>{
    const SerachTerm=e.target.value;

    const SerachName=setCharacters.filter(item =>item.name
      .toLocaleLowerCase().includes(SerachTerm.toLocaleLowerCase()))

      console.log(SerachName)
  }
  



   const renderCharecterItem=(item,index)=>{

       console.log('item',item)

    return  (
      <tbody>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.race}</td>
      <td>{item.gender}</td>
      <td>Detailes</td>
    </tbody>
    )
   }






  




  

  return (
    <div className="container">

      <div className="search-form">
        <div className="input-line">
          <label>Search</label>
          <input type="text" className="input-box" placeholder="by name" onChange={handleSearch} />


           <div className="dropdown-container">
           <label>Sort By</label>
              <select >
                <option value="disabled">asc order</option>
                <option value="disabled">asc order</option>
              </select>

           </div>

        </div>
        
        <div className="input-line">

          <LimitTags/>

       
           <div className="dropdown-container">
           <label>Gender</label>
              <select >
                 
                <option value="Gender">Male</option>
                <option value="Gender">Female</option>
              </select>

           </div>
      
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
        
         {characters.map((item,index)=>{
            return renderCharecterItem(item,index)
         })}



      </table>
      
        <hr/>
      <div className="footer-section">
           <div>
                <button></button>
               <div className="footer-btn">{page}</div>
             
           </div>

        
          <div className="limit-dropdown">
           <label>Limit</label>
              <select value={limit} onChange={(event)=>setLimit(event.target.value)} >
                 
                <option value="10">10</option>
                <option value="50">50</option>
              </select>

           </div>
          
        
   
      </div>
      <hr/>
    </div>
  );
};

export default Home;
