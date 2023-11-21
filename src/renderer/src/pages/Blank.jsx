import React from 'react'
import Navbar from '../components/Navbar'
import { useOutletContext } from 'react-router-dom'

function Blank() {
  const [sidebarToggle] = useOutletContext()

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        <div className="mainCard">Blan Page</div>
      </main>
    </>
  )
}
export default Blank
