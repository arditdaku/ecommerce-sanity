import React from "react";

import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../lib/client";

export const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            className="product-image"
            height={250}
            width={250}
            alt=""
            src={urlFor(image && image[0])}
          />

          <p className="product-name">{name}</p>
          <p className="product-price">$ {price}</p>
        </div>
      </Link>
    </div>
  );
};
