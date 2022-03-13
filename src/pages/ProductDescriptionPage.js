import { queryAllByAttribute } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './common.css'

function ProductDescriptionPage() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    useEffect(() => {
        (async () => {
            // Fetch Product Description Data
            try {
                const result = await fetch(`https://layer0-docs-layer0-examples-api-default.layer0.link/product/${slug}`)
                const productObj = await result.json()
                // Extract the location of imageg and add it to the product object
                const url = `url('https://layer0-docs-layer0-examples-api-default.layer0.link${productObj.picture}')`
                setProduct({ ...productObj, url })
            }
            catch {
                console.log(`Fetching data for product ${slug} failed`)
            }
        })()
    }, [slug])

    const purchase = () => {
        alert("Purchased!")
    }

    return (
        <>
            <span onClick={() => navigate(-1)}><u>Go back</u></span>
            <h2>Product Description Page <u>{slug}</u></h2>
            <div style={{ textAlign: 'center', margin: '20px', }}>
                <div className="card" style={{
                    backgroundImage: product.url,
                    display: 'block', marginLeft: 'auto', marginRight: 'auto'
                }} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {"★".repeat(parseInt(product.rating))}{"☆".repeat(5 - parseInt(product.rating))}</p>
                <button onClick={purchase}>Purchase</button>
            </div>
        </>
    )
}

export default ProductDescriptionPage;