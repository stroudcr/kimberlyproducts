import React from 'react';
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>This product is not suitable to diagnose, treat, cure or prevent any disease.</p>
      <p>Copyright © 2023 Kimberly Products. All rights reserved.</p>
      <p className="icons">
      <a className="email" href="mailto:kimberlyproductsllc@gmail.com"><AiOutlineMail /></a>
      <a href="https://www.facebook.com"><AiFillFacebook /></a>
      </p>
    </div>
  )
}

export default Footer