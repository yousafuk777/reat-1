import { CiBookmark } from "react-icons/ci";
import React, { useState } from 'react'
import ApplyForm from './ApplyForm';

const Card = (props) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.Logo} alt="nachioooooo" />
                    <button>Save <CiBookmark /> </button>
                </div>
                <div className="center">
                    <h3>{props.company} <span>{props.datePosted}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button onClick={() => setShowForm(true)}>Apply Now</button>
            </div>
            {showForm && (
                <div className="modal-overlay" onClick={() => setShowForm(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowForm(false)}>✕</button>
                        <ApplyForm />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card
