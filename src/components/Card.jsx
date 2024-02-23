import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  // data destructuring
  const {title,price,image,id}=props.item
  console.log(props.item.title)
  return (
    <>
          <div className="col">
            <div className="card">
              <img src={image} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="text-secondary">${price}</p>
                <Link to={`productdetail/${id}`} className="btn btn-primary">View Detail</Link>
              </div>
            </div>
          </div>
         
    </>
  );
};

export default Card;
