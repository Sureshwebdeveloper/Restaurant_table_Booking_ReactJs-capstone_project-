import React from "react";
import "../stylesheets/order.css";

const Pagination = ({totalPosts,postperPage,setCurrentPage}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postperPage); i++) {
    pages.push(i);
  }
  return <div className="btn-container">{
    pages.map((page,index)=>{
        return <button className="btn" key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
    })}</div>;
};

export default Pagination;
