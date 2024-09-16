import './App.css'
import Header from './Header'
import { vegetables } from './data'
import Vegetables from './Vegetables'

function App() {

  return (
    <>
      <Header></Header>
      <div>
      {
        vegetables?.map((vegetable)=>(
          <Vegetables key={vegetable.id} vegetable={vegetable}></Vegetables>  //!propsu süslü parantezle aktarmamızın sebebi props olarak aktarılan ögenin bir nesne yani JavaScript ifadesi olmasıdır....
        ))
      }
      </div>
    </>
  )
}

export default App
