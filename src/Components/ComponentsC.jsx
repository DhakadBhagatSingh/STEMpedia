import React from 'react'
import '../index.css'
import { useSelector } from 'react-redux';

export default function ComponentsC() {
  const value = useSelector((state) => state.textTranfer);

  return (
    <div className=' B text-center mt p-1'>
      <div className='text-center'> <h2>Component C</h2></div>
        <div className='comC'>{value}</div>
     </div>
  )
}
