import { useState, useEffect } from 'react'
import './App.css'
import Users from './components/Users';
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);  //!kullanıcılar
  const [loading, setLoading] = useState(false); //!sayfa yüklenme durumu
  const [page, setPage] = useState(1); //!kaçıncı sayfadayız
  const [totalPages, setTotalPages] = useState(5)  //!total kaç sayfamız var

  useEffect(() => {  //!ekran açıldığında veriler ilgili datasetten çekilerek, ekrana gösterme işlemi yapılmaya başlanır. Bu esnada sayfa yüklenme loading olayı true yapılıyor ki kullanıcı veriler yükelnirken beklesin
    const fetchUsers = async () => {
      setLoading(true)
      const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
      const data = await res.json()
      setLoading(false);
      setUsers(data.results)
    };
    fetchUsers();
  }, []);

  const handleClick=(num)=>{  //!kaçıncı sayfada olmak istediğimizi belirtiyoruz
    setPage(num);
  }

  return (
    <div>
      <h1>Pagination</h1>
      {/* //!eğer veriler yükleniyorsa veriler yüklenene kadar loadinge bağlı uyarıyı göster, yoksa verileri göster dedik */}
      {loading? <p>Please Wait...</p> :
      <>
      <Users users={users} page={page}></Users>
      <Pagination totalPages={totalPages} handleClick={handleClick}></Pagination>
      </>}
    </div>
  )
}

export default App
