import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h3>Helps Eliminate:</h3>
      <ul>
        <li>
        • Body odor - armpits to feet and everywhere in between
        </li>
        <li>
        • Fungal itching (such as from jock itch and athletes foot) and
other itching (insect bites, rectal and general itching)
        </li>
        <li>
        • Kills odor causing bacteria and yeast/fungus
        </li>
      </ul>
      <p></p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <div className="products-heading">
      <h3>Use before and after:</h3>
      <ul>
        <li>
        • Athletic Sporting/outdoor activities
        </li>
        <li>
        • Exercise
        </li>
        <li>
        • Daily Hygiene
        </li>
      </ul>
      <p></p>
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