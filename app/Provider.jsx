// 'use client'
import React from 'react'
import Header from './_components/Header'
// import { useParams, usePathname } from 'next/navigation'

const Provider = ({children}) => {
  // const path = usePathname();
  // console.log(path);
  return (
    <div>
      {/* {path !== '/panel/sign-in' || path !== '/panel/sign-up' &&  (<Header />)} */}
      <Header />
        <div className='mt-27'>
            {children}

        </div>

    </div>
  )
}

export default Provider
