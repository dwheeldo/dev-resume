import React from 'react';
import avatarImage from '../img/dave-web.jpg';

const Avatar = () => {
  return (
    <div className="c-avatar">
      <img className="c-avatar__img" src={avatarImage} alt="Me" />
    </div>
  )
}

export default Avatar;
