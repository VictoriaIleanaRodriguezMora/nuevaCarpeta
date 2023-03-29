
import React from 'react'
import { useState, useEffect } from 'react';

export const Asynckmock = () => {
    const [articulos, setArticulos] = useState([])
    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then((response) => {
                return response.json()
            })
            .then((articulos) => {
                setArticulos(articulos)
            })
    }, [])

    console.log(articulos);

    return (
        <div>asynckmock</div>
    )
}





export const getProductos = () => {
    /*     return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 500)
        }) */
    let data
    fetch('http://localhost:5050/products')
        .then((response) => {
            return response.json()
        })
        .then((articulos) => {
            data = (articulos)
        })
    return data
}

export const getProductosById = (id) => {
    /*     return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos.find(prod => prod.id === id))
            }, 500)
        }) */
}

export const getProductosByCategory = (category) => {
    /*     return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos.filter(prod => prod.category === category))
            }, 500)
        }) */
}

export default Asynckmock