import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/ProductSlice';
import { useCart } from '../context/cartContext';

const ProductList = () => {
  const dispatch = useDispatch();
  const { state, dispatch: cartDispatch } = useCart();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button
              onClick={() => cartDispatch({ type: 'ADD_ITEM', payload: product })}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
