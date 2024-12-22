import Client from '@/components/ClientSide/Client'
import Client2 from '@/components/ClientSide/Client2'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Page() {
    return (
        <>
            <Navbar />
            <div>
                <Client/>
                {/* <Client2/> */}
            </div>
        </>
    )
}
