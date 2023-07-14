import React from 'react'
import ItemBox from '../itemBox'
import * as C from './style.js'
import { useEffect, useState } from 'react'

const ItemsList = () => {
  const itemRepetido = 'Item';
  const itensRenderizados = Array(8).fill(itemRepetido);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch('/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(products)
  }, []);

  return (
    <div>
      <C.ListWrapper>
        {itensRenderizados.map((item, index) => (
          <ItemBox key={index}></ItemBox>
        ))}
      </C.ListWrapper>
    </div>
  )
}

export default ItemsList
