import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [word, setWord] = useState(" ");
  const [wordDefinition, setwordDefinition] = useState(" ")
  const [partOfSpeech, setpartOfSpeech] = useState(" ")
  const [phonetic, setPhonetic] = useState(" ")
  const [definition, setDefinition] = useState(" ");

  const clearInput=()=>{
    setWord(' ')
}

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const searchWord = async () => {
    const inpWord = word;
    console.log(inpWord)
    await axios.get((`${url}${inpWord}`))
      .then((response) => {
        console.log(response);
        setDefinition(word);
        setwordDefinition(response.data[0].meanings[0].definitions[0].definition)
        setpartOfSpeech(response.data[0].meanings[0].partOfSpeech)
        setPhonetic(response.data[0].phonetic)
      })
      .catch((err)=>{  //girilen input değeri bir sözcüğe karşı gelmiyorsa diye hata kontrolü
        if(err.response){
          alert("This is not a word!")
          clearInput();
        }
      });
  }


  return (
    <div className="container">
      <div className="search-box">
        <input type="text" value={word} placeholder="Type the word here.." id="inp-word" onChange={(e) => setWord(e.target.value)} />
        <button id="search-btn" onClick={searchWord}>Search</button>
      </div>
      <div className="result" id="result">
        <div className='word'><h3>{definition}</h3></div>
        <div className='details'>
          <p>{partOfSpeech}</p>
          <p>{phonetic}/</p>
        </div>
        <p className="word-meaning">{wordDefinition}</p>
      </div>
    </div>

  )
}
export default App
