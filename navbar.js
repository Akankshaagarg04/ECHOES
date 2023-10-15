import React from "react";

export default function Nav(){
        function gotogit(){
            alert("you entered");
            <a href="https://www.celsius.com/"></a>
        }
    return(
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" ><i className="fa-solid fa-tree fa-2xl" ></i> Aroma </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home <button className="spac" onClick={gotogit}><i className="fa-brands fa-github-alt fa-2xl " ></i></button></a>
        </li>
        
        
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success"  >Search</button>
      
      </form>
      
    </div>
  </div>
</nav>
        
    )
}