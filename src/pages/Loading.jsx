import React  from 'react'
import '../css/loading.css'

const Loading = () => {
    
  return (
    <div className="loader">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>Now Loading...</h2>
  </div>
  )
}

export default Loading