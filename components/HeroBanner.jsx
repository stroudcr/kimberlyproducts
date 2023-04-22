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
        <p className="beats-solo2"><big><strong>100% Drug Free - Herbal Extract</strong></big></p>
        <br/>
        <p className="beats-solo2"><big>ONE HERB - That’s All</big></p>
        <p className="beats-solo2"><big><strong>THAT WORKS!</strong></big></p>
        <img src={urlFor(heroBanner.image)} alt="soothing spray" className="hero-banner-image" />
        <h6 className="beats-solo">Developed to relieve the itch and odor associated with fungal infections, <br/> as well as underarm and foot odor</h6>
        <br/>
        <br/>
          <Link href={`/product/soothing-body-spray`}>
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