import React, { Fragment } from 'react'
import Header from './Components/Header'
import Carousel from './Components/CarouselEffect/CarouselEffect'
import Items from './Components/FrontItems/Items'


const App = () => {
  return (
    <Fragment>
      <Header />
      <Carousel />
      <Items />
    </Fragment>
  )
}

export default App
