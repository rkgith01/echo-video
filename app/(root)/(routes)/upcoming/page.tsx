import CallList from '@/components/CallList'
import { SquareArrowUpRight } from 'lucide-react'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <SquareArrowUpRight size={30}  /> 
        <span>Upcoming</span>
      </h1>
      <CallList type='upcoming'/>
    </section>
  )
}

export default Upcoming