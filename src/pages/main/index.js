import React, { Component } from 'react'
import api from '../../services/api'

import ProductsList from '../../components/productsList'

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async ( page = 1 ) => {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo, page })
    }    


    prevPage = () => {
        const { page } = this.state
        
        if (page === 1) return

        const prevPage = page - 1;        

        this.loadProducts(prevPage)        
    }

    nextPage = () => {        
        const { page, productInfo } = this.state
        
        if (page === productInfo.pages) return

        const nextPage = page + 1;

        this.loadProducts(nextPage)        
    }
    
    render () {
        const { products, productInfo, page } = this.state
        return <div className="product-list">
            <ProductsList 
                products={products}
                currentPage={page}
                totalPages={productInfo.pages}
                nextPage={this.nextPage}
                prevPage={this.prevPage}                
            />            
        </div>
    }
}