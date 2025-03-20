import React from 'react'
import { useEffect } from 'react';
const OnetimeRender = () => {
    useEffect(() => {
        console.log("Component onetimerender mounted!");
      }, []);
  return (
    <div>OnetimeRender</div>
  )
}

export default OnetimeRender