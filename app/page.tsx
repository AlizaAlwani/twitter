'use client';
import { Button } from '@/components/ui/button'
import { Router } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter ();
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-y-2'>
      <div className='font-bold text-3xl '>Welcome To Twitter 🕊️</div>
      <Button className='bg-slate-800 text-white font-semibold rounded-lg' onClick={() => router.push('/twitter')}>Click Here</Button>
    </div>
    </div>
  )
}

export default Page
