import React, { useEffect, useState } from 'react'
import "../Styles/Home.css"
import axios from 'axios'


const Home = () => {

  const [data,setData]=useState(null)


  useEffect(()=>{
    const fetchDate=async()=>{
      try{
        const responce=await axios.get('https://the-one-api.dev/v2/character')
        setData(responce.data)
      }catch(err){
        console.log(err)
      }
    }

    fetchDate();
  },[]);


  return (
      <div className="container">
        <div className="search-form">
        <div className="input-line">
          <label>Serach</label>
        <input type="text" className="input-box" />
        <label >Sort By</label>
        <input type="text" className="input-box" />
      </div>
      <div className="input-line">
        <label >Race</label>
        <input type="text" className="input-box" />
        <label>Gender</label>
        <input type="text" className="input-box" />
               <button>Submit</button>
      </div>

        </div>


         <table className='table'>

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


         <div className="footer-section">
             <hr />
             <div className="footer-content">
              <button>1</button>
              <button>2</button>
              <button>9</button>

              <div className="limit-section">
                <label>Limit</label>
                <button>10</button>
              </div>
             </div>
             <hr />
         </div>


         


      </div>
    
  )
}

export default Home
