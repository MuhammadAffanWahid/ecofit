import React from "react";
import bag from "./data/images/bag.png";
import shoe from "./data/images/shoe.png";
import girl from "./data/images/girl.png";
import boy from "./data/images/boy.png";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      label: "HOT",
      title: "Basic Dress Green",
      type: "Dress",
      price: "$236.00",
      imageUrl: girl,
    },
    {
      id: 2,
      label: "SALE",
      title: "Nike Sportswear Futura Luxe",
      type: "Bag",
      price: "$130.00",
      imageUrl: bag,
    },
    {
      id: 3,
      label: "SALE",
      title: "Yellow Reserved Hoodie",
      type: "Dress",
      price: "$364.00",
      salePrice: "$155.00",
      imageUrl: boy,
    },
    {
      id: 4,
      label: "SALE",
      title: "Nike Air Zoom Pegasus",
      type: "Shoe",
      price: "$220.00",
      salePrice: "$198.00",
      imageUrl: shoe,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
      <div className="flex flex-wrap gap-8 mb-6 text-[16px]">
    <button className="border-none bg-transparent cursor-pointer">
        All Products
    </button>
    <button className="border-none bg-transparent cursor-pointer opacity-50">
        Frocks
    </button>
    <button className="border-none bg-transparent cursor-pointer opacity-50">
        Knitted Frocks
    </button>
    <button className="border-none bg-transparent cursor-pointer opacity-50">
        Caps
    </button>
    <button className="border-none bg-transparent cursor-pointer opacity-50">
        Shoes
    </button>
    <button className="border-none bg-transparent cursor-pointer opacity-50">
        Rompers
    </button>
    <button className="border-none bg-transparent cursor-pointer opacity-50">
        Hair Accessories
    </button>
    <button className="ml-auto px-4 rounded-lg border-none bg-black cursor-pointer text-white">
        Show All
    </button>
</div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg flex flex-col items-center"
          >
            {product.label && (
              <span
                className={`px-2 py-1 text-white text-xs font-bold absolute mt-6 -ml-[250px] ${
                  product.label === "SALE"
                    ? "bg-black"
                    : product.label === "HOT"
                    ? "bg-red-500"
                    : "bg-gray-500" 
                }`}
              >
                {product.label}
              </span>
            )}
            <img
              src={product.imageUrl}
              alt={product.title}
              className=" h-[400px] object-cover rounded-2xl"
            />
            <div className="flex text-[16px] flex-col self-start ml-2 justify-start w-full">
              <h3 className="mt-4 font-semibold">{product.title}</h3>
              <div className="flex justify-between mt-4 mr-4">
                <div className="text-gray-500">{product.type}</div>
                <div className="font-bold">
                  {product.salePrice ? (
                    <>
                      <span className="text-gray-400 line-through">
                        {product.price}
                      </span>
                      <span className="text-red-500 ml-2">
                        {product.salePrice}
                      </span>
                    </>
                  ) : (
                    <span>{product.price}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
