import Head from "next/head";
import Image from "next/image";
import { HeroBanner } from "../components/HeroBanner";
import { Footer } from "../components/Footer";
import { FooterBanner } from "../components/FooterBanner";
import { Product } from "../components/Product";
import { client } from "../lib/client";

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      bannerData,
    },
  };
};
