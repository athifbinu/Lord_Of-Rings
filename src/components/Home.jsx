import React from 'react'
import "../Styles/Home.css"


const Home = () => {
  return (
    <div className="container">
      <div className="search-box">
        <p>Search</p>
        <input type="text" placeholder='By Name' />
      </div>

      <div className="search-box">
        <p>Sort By</p>
        <input type="text" placeholder='By Name(ass/desc)' />
      </div>

      <div className="search-box">
        <p>Race</p>
        <input type="text" placeholder='List Of Race' />
      </div>

      <div className="search-box">
        <p>Gender</p>
        <input type="text" placeholder='Male/Female' />
      </div>

        <button>Submit</button>


        {/* finalResult */}
        <div className="search-result">
             <div className="content">
              
             </div>
        </div>

       
    </div>
    
  )
}

export default Home
