import React from 'react'
import MathJax from "../latex/mathjax";

function Screen(props) {

  return (
    
    <div className="md:h-1/2 h-64 border-2 border-black p-9 rounded-xl">
        <>
          {/* <MathJax/> */}
          <h1 className="font-semibold">{props.heading}</h1>
          <span>{props.text}</span>
        </>
    </div>
  )
}

export default Screen