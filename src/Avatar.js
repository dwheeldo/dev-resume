import React from 'react';
import avatarImage from './img/dave-web.jpg';

const Avatar = () => {
  return(
    <div className="avatar-wrapper">
      <img className="avatar-img" width="200" src={avatarImage} alt="Me"/>
    </div>
  )
}

export default Avatar;