import Client from '@/components/ClientSide/Client'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Page() {
    return (
        <>
            <Navbar />
            <div>
                <Client/>
            </div>
        </>
    )
}
