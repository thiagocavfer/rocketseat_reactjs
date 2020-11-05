import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './styles.css'

const ArticleProduct = (props) => {
    const { product } = props

    return <article>
        <strong>{product.title}</strong>
        <p>{product.description}</p>
        <Link to={`/products/${product._id}`}>Acessar</Link>
    </article>
}

ArticleProduct.propTypes = {
  data: PropTypes.object.isRequired
};

export default ArticleProduct