import React from 'react';

const Avatar = () => {
  return(
    <div className="avatar-wrapper">
      <img className="avatar-img" width="200" src={require("./img/dave-web.jpg")} alt="Me"/>
    </div>
  )
}

export default Avatar;