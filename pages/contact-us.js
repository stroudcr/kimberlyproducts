import React from 'react';


const Home = ({ products, bannerData }) => (
  <div>
    <div className="products-heading">
      <h2>Questions? Contact Us:</h2>
      <div className="hero-banner-container">
      <form>
        <label className="beats-solo">
            Email:
        <input type="email" name="name" />
        </label>
        <br/>
        <label className="beats-solo">
            Subject:
        <input type="text" name="name" />
        </label>
        <br/>
        <label className="beats-solo">
            Message:
        <input type="text" name="name" />
        </label>
        <br/>
        <input className="beats-solo" type="submit" value="Submit" />
      </form>
      </div>
    </div>


  </div>
);



export default Home;