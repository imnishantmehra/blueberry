import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

function Avatar({ isUser }) {
  const {
    user
  } = useAuth0();
  const avatarSrc = isUser ? "small-logo.png" : user.picture;

  return <img src={avatarSrc} alt="" />;
}

export default Avatar;