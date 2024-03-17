import React from 'react'
import {Link} from 'react-router-dom'
import "./Home.css"
import Product from './Product'

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home page image" />

        <div className="home__row">

          <Product
            id="91645"
            title= 'The Lean Startup'
            price={11}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />

          <Product
            id="91855"
            title= 'Kenwood kMix Stand Mixer'
            price={75}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">

          <Product
            id="85465"
            title= 'Smart Watch '
            price={250}
            rating={3}
            image=" https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product
            id="03655"
            title= 'Amazon Echo (3rd generation)'
            price={60}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>

        <div className="home__row">

          <Product
            id="89652"
            title= 'Apple iPad Pro'
            price={175}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id="65454"
            title= 'Samsung Curved LED Gaming Monitor '
            price={500}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

      </div>
    </div>

    
  )
}

export default Home;