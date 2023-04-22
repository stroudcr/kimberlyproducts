import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h3>Helps Eliminate:</h3>
        <p>• <strong>Fungal itching (such as from jock itch and athletes foot) and
other itching (insect bites, rectal and general itching)</strong></p>
        <p>• <strong>Body odor - armpits to feet and everywhere in between</strong></p>
        <br/>
        <h3>Use before or after:</h3>
        <p>• <strong>Athletic Sporting/outdoor activities</strong></p>
        <p>• <strong>Exercise</strong></p>
        <p>• <strong>Daily Hygiene</strong></p>

    </div>


    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>


    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;