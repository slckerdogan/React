import { ChangeEvent, useState } from 'react'
import './App.css'
import { shoppingType } from './apptypes';
import ShoppingArea from './ShoppingArea';

function App() {
  const [shoppingItem, setShoppingItem] = useState<string>("");
  const [shoppingItemNumber, setShoppingItemNumber] = useState<string|number>("");
  const [shoppingList, setShoppingList] = useState<shoppingType[]>([])  //shoppingListte iki input aldığımız ve bu iki inputtan bir dizinin ögesini oluşturduğumuz için, oluşturulan bu dizinin ögelerinin input tiplerini ve adlarını ayrı bir dosyada tanımlayarak import edip kullandık... Bu satırdaki kullanımda shoppingType'ın obje formatlarından oluşan bir dizi olduğunu belirtmiş olduk...

  const handleChanging = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "shoppingItem") {
      setShoppingItem(event.target.value);
    }
    else {
      setShoppingItemNumber(event.target.value);
    }
  }

  const handleAddingList = (): void => {
    const newShoppingTask = { shoppingItem, shoppingItemNumber }  //shopping listesindeki her bir görevin alacağı dizi elemanları setlenen ifadelerden geldiği için, elemanları o ifadelere eşitleyip ardından bunu shoppingList dizisine eleman olarak gönderdik
    if (shoppingItem === "" || shoppingItemNumber === "" || shoppingItemNumber === 0) {
      alert("Lütfen alışveriş listesine ürün eklediğinizden emin olunuz")
      setShoppingItem("");
      setShoppingItemNumber("");
      return;
    }
    setShoppingList([...shoppingList, newShoppingTask]);
    setShoppingItem("");
    setShoppingItemNumber("");
  }

  const deleteTask = (nameToDelete: string): void => { //nameToDelete ifadesi ShoppingArea'daki silme fonksiyonundan gelen fonksiyon parametresini tanımlar...
    setShoppingList(
      shoppingList.filter((task) => { //task ifadesi alışveriş listesinin bir ögesini tanımlar
        return task.shoppingItem !== nameToDelete;  //silenmeyecekleri tut gerisini sil kalanı ekranda göster demek
      })
    );
  };

  return (
    <div>

      <div style={{display: 'flex'}}>
        <input type="text" name='shoppingItem' placeholder='Ürün adını giriniz' value={shoppingItem} onChange={handleChanging} style={{ margin: "15px", width: "60%", height: "30px", fontSize: "larger" }} />

        <input type="text" name='shoppingNumber' placeholder='Ürün miktarını giriniz' value={shoppingItemNumber} onChange={handleChanging} style={{ margin: "15px", width: "60%", height: "30px", fontSize: "larger" }} />

        <button onClick={handleAddingList} style={{ margin: "15px", width: "60%" }}>Listeye Ekle</button>
      </div>

      <div>
        <h2>ALIŞVERİŞ LİSTESİ</h2>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBlockEnd:"1px solid"}}>
          <h3>Alınacak Ürün</h3>
          <h3>Miktar</h3>
          <h3>Listeden Kaldır</h3>
        </div>

        {shoppingList.map((task: shoppingType, index: number) => { //task dediğimiz alışveriş listesinin bir ögesini tanımlar
          return <ShoppingArea key={index} task={task} deleteTask={deleteTask}/>;
        })}
      </div>

    </div>
  )
}

export default App
