import React from 'react';

export default function Card(props) {
  return (
    <div className='reviews'>
       <div className="reviewBx">
       <div className="imgBx">
         <img src={props.img} alt="Review" />
       </div>
       <div className="text-review-bx">
         <h3>{props.name}</h3>
          <p>{props.opinion}</p>
       </div>
      </div>
    </div>
  );
}
