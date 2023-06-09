import React, { useEffect, useState } from 'react'
import "../Styles/Detailes.css"
import { Link, useParams } from 'react-router-dom'

const Detailes = () => {


   const {_id}=useParams();
   console.log("id",_id)
  




  return (
    <>
    <div className='hero-section'>
       <div className='main-section'>
        <div className='left-section'>
                 <p>Name</p>
                 <p>WikiUrl</p>
                 <p>Race</p>
                 <p>Gender</p>
                 <p>Height</p>
                 <p>Hair</p>
                 <p>Realm</p>
                 <p>Birth</p>
                 <p>Spouse</p>
                 <p>Death</p>
           </div>

        <div className='right-section'>
           <p>Athif</p>
         </div>

          
      </div>

       <div className='close-btn'>

          <Link to="/home">
          <button>Close</button>
          </Link>
       </div>
       
    </div>
     <hr/>
  </>

  )
}

export default Detailes
