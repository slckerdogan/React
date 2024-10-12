import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { ThemeContext } from '../App'


function Header() {
  const {name,surname,setDeger}=useContext(GlobalContext) //createContext kullancağımız için, propslardan aktarmak istediğimiz verileri çektik

  const theme = useContext(ThemeContext);


  const nameChangeHandler=()=>{
    if(name==="Mahmut"){
      setDeger("Selçuk")
    }
    else{
      setDeger("Mahmut")
    }
  }
  

  return (
    <div style={theme} className='width'>
        <h2>Contextten Gelen Veri:{name}{" "}{surname}</h2>
        <button onClick={nameChangeHandler}>{name === "Selçuk" ? "Show Mahmut" : "Show Selçuk"}</button>
    </div>
  )
}

export default Header