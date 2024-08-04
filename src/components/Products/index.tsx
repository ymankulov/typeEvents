import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "../../types";

const Products = () => {
  //https://fakestoreapi.com/products

  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = async () => {
    let res = await axios.get(`https://fakestoreapi.com/products`);
    let { data } = res;
    setProducts(data);
    console.log(data, "products");
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="container">
        <center>
          <h1>Products</h1>
        </center>
        <div className="flex flex-wrap gap-20 justify-between items-center">
          {products.map((el) => (
            <div
              className="w-[350px] h-[550px] rounded-[20px] items-center border-2 border-solid border-black p-[20px] flex flex-col"
              key={el.id}
            >
              <img src={el.image} className="w-[300px] h-[400px]" alt="" />
              <h1>{el.title}</h1>
              <h1>{el.price}$</h1>
              <h1>{el.category}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
