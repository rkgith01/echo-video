import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <Loader2 className='w-9 h-9 '/>
    </div>
  )
}

export default Loader