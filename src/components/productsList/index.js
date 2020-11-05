import React from 'react'

import ProductArticle from '../productArticle'

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

export default ProductsList