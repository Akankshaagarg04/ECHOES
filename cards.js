import React,{useState} from "react";
const Card=(props)=>{
    const[counter,setcounter]=useState(0);
    return(
        <div className="card mb-3 widcard" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name:{props.name}</h5>
        <p className="card-text">About:{props.about}</p>
        <p className="card-text"><small class="text-muted">{counter}
        <button onClick={()=>setcounter((prevCount)=>prevCount+1)}><i class="fa-solid fa-heart"></i></button>
        </small></p>
      </div>
    </div>
  </div>
</div>
)
    }
    export default Card;