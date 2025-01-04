import React from 'react'

function user({ user }) {  //!kullanıcıların her bir tanesinin kutusu
  return (
      <div className="user-box">
        <img src={user.picture.large} />
        <p>{`Full Name : ${user.name.first} ${user.name.last}`}</p>
        <p>{`Phone : ${user.phone}`}</p>
      </div>
  )
}

export default user