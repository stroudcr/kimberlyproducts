import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          {/* <p>{discount}</p> */}
          {/* <h3>{largeText2}</h3> */}
          
        </div>
        <div>
          <h3>Smell fresh. Be itch and odor free. Apply liberally 2-3 times daily and rub in.
          <br/>
          <br/>
Use as often as needed. 8oz., a 2-3 month supply</h3>
          <br/>
          <br/>
        <h3>Contains no skin-thinning cortisones or liver damaging oral medications.
Contains ONE herb that works. (Why do other products need 10-20
ingredients if any one worked?)</h3>
<br/>
          <br/>
        <h3>Contains: Water, denatured alcohol, herbal extract, citric acid</h3>
        <br/>
        <br/>
        <h3>Order at:
        <br/>
• (229) 454-0079
        <br/>
• order@kimberlyproducts.com or
        <br/>
• Kimberlyproducts.com</h3>

        </div>
        <div className="right">
          {/* <p>{smallText}</p>
          <p>{desc}</p> */}
          {/* <p><small>{saleTime}</small></p> */}
        </div>
          
       
      </div>
    </div>
  )
}

export default FooterBanner