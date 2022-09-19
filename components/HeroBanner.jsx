import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h6 className="beats-solo">Welcome to</h6>
        <h3 className="beats-solo2">{heroBanner.midText}</h3>
        
        

        <div>
        <img src={urlFor(heroBanner.image)} alt="itch master logo" className="hero-banner-image" />
        <p className="beats-solo2">Powered by a drug-free herbal extract</p>
          <Link href={`/product/itch-master`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            {/* <h5>Description</h5> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner