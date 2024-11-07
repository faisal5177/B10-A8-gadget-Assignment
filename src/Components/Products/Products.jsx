import Buttons from "../Buttons";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/public/Products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products); // Ensure you are setting the correct array
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="px-10">
      <h2 className="mb-10 font-bold text-4xl text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <section className="flex gap-10 px-10">
        <Buttons />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center mx-auto">
          {Array.isArray(products) && products.map((product) => (
            <Product product={product} key={product.product_id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
