import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {

const [foodCat, setfoodCat] = useState([]);
const [foodItem, setfoodItem] = useState([]);

const loadData = async ()=>{
  let response = await fetch('http://localhost:3001/api/foodData', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  });

  response = await response.json();
  setfoodItem(response[0]);
  setfoodCat(response[1]);
  // console.log(response[0],response[1]);
}
  useEffect(()=>{
    loadData();
  },[])



  const [search, setSearch] = useState('');
  return (
    <div>
      <div><Navbar /></div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner " id="carousel">
          <div className=" carousel-caption  " style={{ zIndex: "9" }}>
            <div className=" d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {search}
                onChange = {(e)=>{setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-success" type="submit"> Search </button> */}
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×900/?fish"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×900/?chicken"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×900/?pizza"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className="container m-3">
        {
          foodCat !==[]
          ? foodCat.map((data)=>{
            return(
             <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
              <hr/>
              {foodItem  !== [] 
              ? foodItem.filter( (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
              .map(filterItems=>{
                return(
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                    {/* <div>{filterItems.options[0]}</div> */}
                   <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card> 
                  </div>
                )
              })
              : <div>No such data Found</div>}
              </div>
            )
          })
          : <div>" "</div>  
        }
        <Card/>
        </div>
      <div> <Footer /></div>
    </div>
  );
}
