import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance(`/api/posts/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(product);
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
