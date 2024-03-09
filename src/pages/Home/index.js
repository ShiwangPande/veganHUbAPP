import React from 'react'
import Banner from '../../components/Banner.js'
import About from '../../components/About.js'
import ProductsPreview from '../../components/ProductsPreview.js'
function Home({ saladItems, appetizerItems, handleAddProduct }) {
  return (
    <>
      <Banner />
      <ProductsPreview saladItems={saladItems} appetizerItems={appetizerItems} handleAddProduct={handleAddProduct} />
      <About />
    </>
  )
}

export default Home 