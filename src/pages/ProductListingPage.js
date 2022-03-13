import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './common.css'

function ProductListingPage() {
    const navigate = useNavigate()
    const { slug } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            if (slug) {
                try {
                    const results = await fetch(`https://layer0-docs-layer0-examples-api-default.layer0.link/category/${slug}`)
                    const arrayData = await results.json()
                    setProducts(arrayData)
                }
                catch {
                    console.log(`Fetch products for ${slug} failed`)
                }
            }
        })()
    }, [slug])

    return (
        <>
            <span onClick={() => navigate(-1)}><u>Go back</u></span>
            <h2>ProductListingPage for <u>{slug}</u></h2>
            <div className="row">
                {products.map((product, index) => {
                    const url = `url('https://layer0-docs-layer0-examples-api-default.layer0.link${product.picture}')`
                    return (
                        <Link to={`${product.href}`} key={index}>
                            <div className="column">
                                <div className="card" style={{ backgroundImage: url }} />
                                <p className="name">{product.name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default ProductListingPage