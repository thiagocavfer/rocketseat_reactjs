import React, { Component } from 'react'
import api from '../../services/api'

import Product from '../../components/product'

export default class ProductPage extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const response = await api.get(`/products/${id}`)
        this.setState({ product: response.data })
    }

    render() {
        const { product } = this.state

        return <Product data={product} />
    }
}