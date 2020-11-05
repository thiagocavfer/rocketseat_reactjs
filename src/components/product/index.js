import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './styles.css'

const Product = (props) => {
    const { data } = props

    return <div>
        <div className="product-info">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>
                URL: <a href={data.url}>{data.url}</a>
            </p>            
        </div>  
        <div className="actions">
            <Link to={`/`} >                
                Voltar
            </Link>
        </div>  
    </div>        
}

Product.propTypes = {
  data: PropTypes.object.isRequired
};

export default Product