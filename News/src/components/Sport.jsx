import React from 'react';
import { Link, Outlet  } from 'react-router-dom';


function Sport() {
  return (
    <div>
      <div style={{ display: "flex" }}>
      <Link to="basketball" style={{ marginRight: "300px", marginLeft: "275px" }}>Basketball</Link>
      <Link to="football" style={{ marginLeft: "300px" }}>Football</Link>
      </div>

      <div style={{ marginTop: "50px", marginBottom: "40px" }}>
        <img src="https://picsum.photos/id/133/800/300" alt="" />
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Sport