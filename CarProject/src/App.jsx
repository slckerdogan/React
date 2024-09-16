import './App.css'
import Header from './Header'
import Car from './Car'
import car1 from './images/car1.jpg'
import car2 from './images/car2.jpg'
import car3 from './images/car3.jpg'
import car4 from './images/car4.jpg'
import car5 from './images/car5.jpg'
import car6 from './images/car6.jpg'

function App() {

  return (
    <>
      <Header></Header>

      <div className='car'>

        <Car
          image={car1}
          title="Red Sport Car"
          description="Lorem ipsum dolor sit amet consectetur adipisicing.">
        </Car>

        <Car
          image={car4}
          title="Blue Sedan On Snow Ground"
          description="Lorem ipsum dolor sit amet consectetur adipisicing.">
        </Car>

        <Car
          image={car3}
          title="White Car Crossing Body Of Water"
          description="Lorem ipsum dolor sit amet consectetur adipisicing.">
        </Car>

        <Car
          image={car5}
          title="Yellow Sedan Parked Near Building"
          description="Lorem ipsum dolor sit amet consectetur adipisicing.">
        </Car>

        <Car
          image={car2}
          title="Green Road-Off Vehicle On Snow"
          description="Lorem ipsum dolor sit amet consectetur adipisicing.">
        </Car>

        <Car
          image={car6}
          title="Car Headlight"
          description="Lorem ipsum dolor sit amet consectetur adipisicing.">
        </Car>

      </div>

    </>
  )
}


export default App
