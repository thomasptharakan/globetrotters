import React from 'react'

function Carousel() {
  return (
    <div className="carousel rounded-box h-96">
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1598948485421-33a1655d3c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Burger" />
  </div> 
</div>
  )
}

export default Carousel