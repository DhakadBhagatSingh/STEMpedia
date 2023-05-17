import React from 'react'
import ComponentsB from "./ComponentsB";
import ComponentsC from "./ComponentsC";
import '../index.css'
export default function ComponentsA() {
  return (
    <div className=' A text-center'>
        <h1>Component A</h1>
        <h3>[Functionality to show the store data from one componet to other component]</h3>
        <div>
         <ComponentsB></ComponentsB>
         <ComponentsC></ComponentsC>
        </div>

    </div>
  )
}
