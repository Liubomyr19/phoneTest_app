import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import './HotPrices.scss';

export const HotPrices = () => {
  const { products } = useContext(GlobalContext);

  useEffect(() => {
    const newProducts = products.map(product => {
      const discount = product.fullPrice - product.price;

      return { ...product, discount };
    });

    newProducts.sort((a, b) => b.discount - a.discount);
  }, [products]);
};
