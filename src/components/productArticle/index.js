import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const ArticleProduct = (props) => {
    const { product } = props

    return <article>
        <strong>{product.title}</strong>
        <p>{product.description}</p>
        <Link to={`/products/${product._id}`}>Acessar</Link>
    </article>
}

export default ArticleProduct