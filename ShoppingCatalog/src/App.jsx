import { useState } from 'react';
import './App.css';
import ShoppingArea from './ShoppingArea';

function App() {
  const [shoppingItem, setShoppingItem] = useState("")
  const [shoppingItemNumber, setShoppingItemNumber] = useState("")
  const [shoppingList, setShoppingList] = useState([])

  const handleChanging = (event) => {
    if (event.target.name === 'shoppingItem') {
      setShoppingItem(event.target.value)
    }
    else {
      setShoppingItemNumber(event.target.value)
    }
  }

  const handleAdding = () => {
    const newShoppingTask = { shoppingItem, shoppingItemNumber }
    if (shoppingItem === "" || shoppingItemNumber === "" || shoppingItemNumber === 0) {
      alert("Lütfen alışveriş listesine ürün eklediğinizden emin olunuz")
      setShoppingItem("")
      setShoppingItemNumber("")
      return;
    }
    setShoppingList([...shoppingList, newShoppingTask])
    setShoppingItem("")
    setShoppingItemNumber("")
    console.log(shoppingList)
  }

  const deleteTask=(nameToDelete) => {
    setShoppingList(
      shoppingList.filter((task) => { //task ifadesi alışveriş listesinin bir ögesini tanımlar
        return task.shoppingItem !== nameToDelete;  //silenmeyecekleri tut gerisini sil kalanı ekranda göster demek
      })
    );
  }

  return (
    <div>

      <div style={{ display: 'flex' }}>
        <input type="text" placeholder='Ürün adını giriniz' style={{ margin: "15px", width: "60%", height: "30px", fontSize: "larger" }} value={shoppingItem} onChange={handleChanging} name='shoppingItem' />
        <input type="text" placeholder='Ürün adını giriniz' style={{ margin: "15px", width: "60%", height: "30px", fontSize: "larger" }} value={shoppingItemNumber} onChange={handleChanging} name='shoppingItemNumber' />
        <button style={{ margin: "15px", width: "60%" }} onClick={handleAdding}>Listeye Ekle</button>
      </div>

      <h2>ALIŞVERİŞ LİSTESİ</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBlockEnd: "1px solid" }}>
        <h3>Ürün Adı</h3>
        <h3>Ürün Miktarı</h3>
        <h3>Ürün Kaldır</h3>
      </div>

      {shoppingList.map((task, index) => {
        return <ShoppingArea task={task} key={index} deleteTask={deleteTask}></ShoppingArea>
      })}

    </div>
  )
}
export default App
