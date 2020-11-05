import React from 'react'
import ProductArticle from '../productArticle'
import PropTypes from 'prop-types';

import './styles.css'

const ProductsList = (props) => {
    const { 
        products, 
        prevPage, 
        nextPage,  
        currentPage,
        totalPages
    } = props

    console.log(currentPage===totalPages)

    return <div className="product-list">
        {products.map(product => 
            <ProductArticle key={product._id} product={product} />
        )}
        <div className="actions">
            <button 
                disabled={currentPage===1} 
                onClick={prevPage}>
                    Anterior
            </button>
            
            <button 
                disabled={currentPage===totalPages} 
                onClick={nextPage}>
                    Próxima
            </button>
        </div>
    </div>
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    prevPage: PropTypes.func.isRequired, 
    nextPage: PropTypes.func.isRequired,  
    currentPage: PropTypes.number.isRequired, 
    totalPages:  PropTypes.number.isRequired    
};

export default ProductsList