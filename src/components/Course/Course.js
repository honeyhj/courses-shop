import React from 'react';
import './Course.css'
const Course = (props) => {
    const{name,price,by}=props.product
    return (
        <div className="course">
            <h2>{name}</h2>
            <h5>By : {by}</h5>
            <h6>Course Duration: </h6>
            <p>Price : ${price}</p>
            <button onClick={()=>props.handleAddIssue(props.product)} className="text-primary">Enroll Now</button>
        </div>
    );
};

export default Course;