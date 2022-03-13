import React, { setState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// CSS
const Container = styled.div`
    text-align: center;
`
const Button = styled.button`
    margin: 10px;
`

function HomePage() {
    const navigate = useNavigate()

    const cat1 = ["hats", "shoes", "watches"]

    return (
        <Container>
            {cat1.map((category, index) =>
                <Button onClick={() => navigate(`/category/${category}`)} key={index}>
                    {category}
                </Button>
            )}
        </Container>
    )
}

export default HomePage