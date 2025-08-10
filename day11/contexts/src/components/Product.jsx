import React from 'react'

const Product = () => {
  return (
    <div className='grid justify-center items-center gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <div className='bg-gray-400 p-8 text-white'>Product 1</div>
      <div className='bg-gray-400 p-8 text-white'>Product 2</div>
      <div className='bg-gray-400 p-8 text-white'>Product 3</div>
      <div className='bg-gray-400 p-8 text-white'>Product 4</div>
    </div>
  )
}

export default Product
