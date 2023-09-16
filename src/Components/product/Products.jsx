import { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('../../../public/bottles.json')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <>
      <h2 className="center">Product: {product.length}</h2>
      <div className='product-container'>
        {product.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
