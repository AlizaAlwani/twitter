import { Formwrapper } from '@/components/Formwrapper'
import { Twitterform } from '@/components/Twitterform'
import React from 'react'

const Twitter = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Formwrapper title='Tweet 🕊️'>
        <Twitterform />
      </Formwrapper>
    </div>
  )
}

export default Twitter
