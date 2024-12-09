import {useState} from 'react';
import * as math from 'mathjs'
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [text, setText] = useState("");  //ekrana yazdığımız rakamlar
  const [result, setResult] = useState("");  //hesaplama sonucu oluşan sonuç

  //*Bu iki useState'de Input.jsx'e aktarıldı çünkü girilen sayıları ve işlem sonuçlarını o komponent aracılığı ile insanlara gösterdik

  const addToText = (val)=>{   //yazılan rakamlar bu fonksiyonla oluşturuluyor
    setText((text) => [...text, val + " "])
  }
  const calculateResult = () => {  //sonucu hesaplama fonksiyonu
    const input = text.join("") //rakamlar arasındaki gereksiz boşlukları silecek
    setResult(math.evaluate(input))

  }

  const resetInput = () => {  //input alanını komple sıfırlar ve temizler
    setText("");
    setResult("");
  }

  return (
    <div className="App">
      <div className='calc-wrapper'>

        <Input text={text} result={result} />

        <div className='row'>
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color="#00ADB5" handleClick={addToText} />
        </div>
        <div className='row'>
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color="#00ADB5" handleClick={addToText} />
        </div>
        <div className='row'>
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color="#00ADB5" handleClick={addToText} />
        </div>
        <div className='row'>
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color="#00ADB5" handleClick={addToText} />
        </div>
        <Button handleClick={resetInput} symbol="Clear" color="red" />
      </div>
    </div>
  );
}

export default App;