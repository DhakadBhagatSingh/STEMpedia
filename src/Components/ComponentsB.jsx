import React from 'react'
import '../index.css'
import { useDispatch } from 'react-redux';

import transferText from '../state/action-creator';
export default function ComponentsB() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(transferText(value))
    dispatch({ type: 'UPDATE_VALUE', payload: value });
  };
  return (
    <div className=' B text-center'>
      <div className='text-center p-1'> <h2>Component B</h2></div>
        <div className='text-center'>
          <textarea placeholder="Leave a comment here" onChange={handleChange} id="floatingTextarea"></textarea>        
          </div>
    </div>
  )
}
