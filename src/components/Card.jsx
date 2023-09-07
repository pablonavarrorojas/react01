//import React from 'react'
import './Card.css';
import { Link } from "react-router-dom";

function Card({ title='', description='', address ='' }) {
  return (
    <div className="Card">
          <Link to={ address }>{ title }</Link>
          <p>{ description }</p>
    </div>
  )
}

export default Card