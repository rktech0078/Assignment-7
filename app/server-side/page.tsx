import Navbar from '@/components/Navbar'
import Server from '@/components/ServerSide/Server'
import React from 'react'

export default function Page() {
  return (
    <>
      <Navbar />

      <div>
        <Server/>
      </div>
    </>
  )
}
