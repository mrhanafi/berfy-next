'use client'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const {user, isSignedIn} = useUser();

  return (
    <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
      <div className='flex gap-10 items-center'>
        <Image 
        src={'/logo.svg'}
        width={150}
        height={150}
        alt='logo'
        />
        <ul className='hidden md:flex gap-10'>
            <li className='hover:text-primary font-medium text-md cursor-pointer'>Home</li>
            <li className='hover:text-primary font-medium text-md cursor-pointer'>Device</li>
        </ul>
      </div>
      <div className='flex gap-3 items-center'>
        {isSignedIn ? (
            <div  className='flex gap-3 items-center'>
                <Link href={'add-new-post'}>
                    <Button className="flex gap-2 items-center"><Plus className='h-5 w-5' /> Post Your Device</Button>
                
                </Link>
                <UserButton />
            
            </div>
        )
             :
            <Link href={'/sign-in'} >
                <Button variant="outline">Panel Login</Button>
            
            </Link>
        }
      </div>
    </div>
  )
}

export default Header
