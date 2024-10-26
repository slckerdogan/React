import { useState } from 'react'
import './App.css'

function App() {
  const [visible,setVisible]=useState(true)
  const [bg,setBg]=useState("blackbg")
  const[textform,setTextForm]=useState("texttt")
  const [isVisible, setIsVisible] = useState(true);

  const removeItem=()=>{
    if(visible===true){
      setVisible(false)
    }
    else{
      setVisible(true)
    }
  }

  const changeDecoration=()=>{
    setBg(bg==="blackbg"? "whitebg":"blackbg")
  }

  const removeElement = () => {
    setIsVisible(false);
  }

  return (
    <>
    <h2>Change Something with Click the "P" Elements</h2>
    <h5>With clicking, you can change the background color or their text decoration.</h5>
      <p onDoubleClick={removeItem}>{visible===true?"With double click, this element disappear": "Element is disappered but with double click, you see it again"}</p>

      <p onClick={changeDecoration} className={`${bg}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ab eligendi sunt. Repellat vitae, voluptate quos aliquid culpa obcaecati enim dicta, nostrum placeat quae ipsum qui quas autem eligendi nam.</p>

      <p onClick={()=>setTextForm(textform==="texttt"?"textt":"texttt")} className={`${textform}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis quasi repellendus voluptatibus laboriosam facilis. At tempora laudantium voluptate nobis quibusdam quod animi ratione maiores quo, dolorem nisi quia ipsa! Obcaecati, sapiente sequi optio aspernatur quae officiis accusamus aperiam deserunt ipsum dolorem consequatur sint nam!</p>

      {isVisible && <p onClick={removeElement}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, alias dolor consequatur omnis esse iste quaerat est aspernatur ullam at temporibus ea ut dolorem. Ullam officia velit doloribus magni. Nostrum fuga officiis quis, iusto obcaecati culpa blanditiis dignissimos libero officia animi, sed placeat ullam et repellendus error consequuntur quibusdam accusantium, adipisci repellat ut asperiores unde.</p>}
    </>
  )
}

export default App
