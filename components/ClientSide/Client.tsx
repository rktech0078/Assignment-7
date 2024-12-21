"use client";
import Image from 'next/image';
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

export default function Client() {


    const [data, setData] = useState<Data[]>([])
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
                    <div className='flex justify-center items-center mt-40'>
                        <Image src={"/loading-bg.gif"} alt='Loading' width={120} height={120} ></Image>
                    </div>
                ) : (
                    <div>
                        <h1 className='mb-[30px] p-3 mt-[15px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-bold text-blue-700'>CLIENT SIDE DATA FETCHING</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-9'>
                            {data.map((product, index) => (
                                <div key={index} className='bg-white w-full h-[500px] rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:scale-[1.06] transition'>
                                    <div className='h-[180px]' >
                                        <Image src={product.image} alt={product.title} width={100} height={100} className='size-[180px] mx-auto' />
                                    </div>
                                    <h1 className='text-gray-500 text-[18px] mt-5 mb-3'>{product.category}</h1>
                                    <h1 className='text-[20px] font-semibold mb-3 line-clamp-1 hover:line-clamp-4'>{product.title}</h1>
                                    <h1 className='line-clamp-2 text-[gray] mb-3'>{product.description}</h1>
                                    <h1 className='text-[20px] font-semibold mb-3'>${product.price}</h1>
                                    <div className='flex items-center gap-3'>
                                        <Image src={"/star.png"} alt='star' width={100} height={100} className='size-[24px]' />
                                        <p className='text-yellow-500 font-semibold'>{product.rating.rate}</p>
                                        <p className='text-yellow-500 font-semibold'>({product.rating.count} Reviews)</p>
                                    </div>
                                    <div className='flex items-center justify-end mr-2 mt-4'>
                                        <button className=' bg-blue-500 px-4 py-2 border hover:border-black rounded-full text-white font-bold hover:bg-white  hover:text-black '>Buy Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}


