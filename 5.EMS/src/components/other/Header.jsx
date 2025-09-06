import React, { useState } from "react";

const Header = (props) => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }

  const logOutUser=()=>{
localStorage.setItem('loggedInUser','');
// window.location.reload()
props.changeUser('')

  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl text-white font-medium">
        Hello <br /> <span className="text-3xl font-semibold"> username💕💕</span>
      </h1>
      <button onClick={logOutUser} className="text-white text-lf font-medium bg-red-600 px-3 py-2 rounded-sm" >Log Out </button>
    </div>
  );
};

export default Header;
