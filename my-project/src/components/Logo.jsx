import React from 'react'

import logo from '../assets/logo-websites-31266.png';

const Logo = ({width = '2.6rem'}) => {
  return <img src={logo} style={{width: width}} alt="facemash logo" />
}

export default Logo
