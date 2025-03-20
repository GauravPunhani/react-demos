import React from 'react'
import { useEffect } from 'react';
const EveryRender = () => {
    useEffect(() => {
        console.log("Component Everytime mounted!");
      });
  return (
    <div>EveryRender</div>
  )
}

export default EveryRender