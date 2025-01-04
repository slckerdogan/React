import React from 'react'
import User from "./User";

function Users({ users, page }) {  //!kullanıcıların ekranda gösterileceği ana kapsayıcı, burada her bir sayfada kaç tane kullanıcı yer alacağını belirtmek için bir bir başlangıç ve bitiş sayısı belirledik ve bu sayıya göre slice işlemi yapıp o kadar sayıyı map ile döndürüp ekrana kullanıcı bastırdık ki buda her sayfa için 10 kullanıcı sayısı yaptı. Bizde 10 tane kullanıcıyı önce slice edip sonra bunları map ile ekrana bastırmak için user komponentine gönderdik
    const visibleUsersInPage=(page-1)*10
    const usersInPage=users.slice(visibleUsersInPage,visibleUsersInPage+10);

    return (
        <div className="user-container">
        {usersInPage.map((user)=>(
            <User user={user} key={user.login.uuid}></User>))}
        </div>
    )
}

export default Users