import React, { useEffect } from "react";
import garlicImage from "../assets/without_peel_garlic_in_a_bowl_spilled.jpeg";
import garlicImage1 from "../assets/garlic-oil-treatment.webp";
import garlicpowderImg from "../assets/garlic_powder_inside_the_bowl_and_outside.webp";
import dehydretedimg from "../assets/dehydreted-garlic.jpg";
const products = [
  {
    name: "Peeled Garlic Cloves",
    description: "Vacuum packed, no preservatives.",
    image: garlicImage,
    sizes: "1kg, 10kg, custom",
  },
  {
    name: "Garlic Powder",
    description: "Fine, clump-free, 100% pure.",
    image: garlicpowderImg,
    sizes: "1kg, 10kg, custom",
  },
  {
    name: "Dehydrated Garlic Flakes",
    description: "Hot-air dried, crisp and flavorful.",
    image: dehydretedimg,
    sizes: "1kg, 10kg, custom",
  },
];

const Products = () => {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="py-20 bg-green-50 px-6">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12 wow animate__animated animate__fadeInDown">
        Our Products
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden wow animate__animated animate__fadeInUp"
            data-wow-delay={`${i * 0.2}s`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {product.description}
              </p>
              <p className="text-sm text-green-700 font-semibold">
                Pack Sizes: {product.sizes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
