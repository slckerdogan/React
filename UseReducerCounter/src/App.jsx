import { useReducer } from 'react'
import './App.css'

function reducer(state, action) {  //?reducer fonksiyonu içine aldığı state ve action değerleriyle ilgili initial state'lere bağlı olarak gerekli aksiyonları döndürür. Aşağıda ilgili initialState değeri için aksiyonlar verilmiştir. Burada input vb ile veri almak değilde buton ile veri almak olduğu için aksiyonları case'lere bağlı olarak return ifadeleri içinde tanımlayabildik. Ancak reducerimiz input vb ile veriyi alan ve birden fazla değeri barındıran initialState özelliğiyle olsaydı, state'i her seferinde spread ile parçalayıp kullanacağımız ilgili aksiyona aktarmamız ve yine ilgili aksiyon için gerekli initialState'de bulunan veriyi de "action.payload" kullanarak güncellememiz gerekecekti.

  switch (action.type) {
    case "increment":
        return {count:state.count+1};
    case "decrement":
        return {count:state.count-1};
    case "setZero":
        return {count:0};
    default:
        throw new Error("Invalid action type!");
}
}

const initialState = {
  count: 0,
}
function App() {

   //?useReducer fonksiyonu parantez içine bir adet reducer fonksiyonu ve kullanılacak şeylerin initialValue değerlerini alır. Bu reducer fonksiyonu ve initialState değerlerini, ayrı yerde tanımlayabileceğimiz gibi useReducer içinde de tanımlayabiliriz. Akabinde useReducer ile tutulan tüm değerleri state ile alıp, statelere bağlı durumların tetiklenmesi içinde dispatch özelliğini kullanırız. state ifadesi, initialState'den gelenleri kullanır

  const [state,dispatch] = useReducer(reducer, initialState)

    //!initialStatelere bağlı olarak stateleri aşağıdaki gibi dispatch sayesinde tetikledik. İlgili tetiklemeler, herhangi bir input vb ifadeden girilen değerle değilde butona basma ile gerçekleştiği için dispatch ile her butonun tetiklediği aksiyonu belirttik. Şayet inputla değer girseydik, type ile beraber payload özelliğini de verip input alanına ulaşmamız gerekecekti

  const increment=()=>{
    dispatch({type:"increment"}); //buton, inputa bağlı işlem yaparsa payload yine gerekir bunu unutma!!!!Sadece type olması demek buton kendi başına free takılıyor demek
  }

  const decrement=()=>{
    dispatch({type:"decrement"});
  }

  const setZero=()=>{
    dispatch({type:"setZero"});
  }

  return (
    <div>
      <h1>UseReducer Counter App</h1>
      <p>{state.count}</p>
      <button onClick={increment}>Arttır</button>
      <button onClick={setZero}>Sıfırla</button>
      <button onClick={decrement}>Azalt</button>

    </div>
  )
}

export default App
