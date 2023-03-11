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
        <br/>
        <br/>
        <p className="beats-solo2"><big>100% Drug Free - Herbal Extract</big></p>
        <br/>
        <p className="beats-solo2"><big>ONE HERB - That’s All</big></p>
        <p className="beats-solo2"><big>THAT WORKS!</big></p>
        <br/>
        <h6 className="beats-solo">Kimberly Products are developed to relieve the itch and odor <br/>associated with fungal infections, as well as underarm and foot odor.</h6>
        <br/>
        <br/>
        <p className="beats-solo2">Developed to relieve the itch and odor associated with fungal infections,
as well as underarm and foot odor</p>
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