"use client";

import React, { useState, useEffect } from 'react'


type Data = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}


const Client2 = () => {


    const [data, setData] = useState<Data[]>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)

        const dataFetching = async () => {
            const url = await fetch("https://fakestoreapi.com/products")
            const response: Data[] = await url.json()
            setData(response)
        }
        dataFetching()
    }, [])






    return (
        <>
            <div>
                {loading ? (
                    <div>
                        <h1>Loading....</h1>
                    </div>
                ) : (
                    <div>{data?.map((product, index) => (
                        <div key={index}>
                            <h1>{product.description}</h1>
                        </div>
                    ))}</div>
                )}
            </div>
        </>
    )
}

export default Client2