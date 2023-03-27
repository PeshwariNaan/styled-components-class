import styled, { css } from 'styled-components';
import ComplexTitle from './ComplexTitle';
import Product from './Product';

const products = [
  { id: 1, name: 'chair', price: 30 },
  { id: 2, name: 'bed', price: 150 },
  { id: 3, name: 'couch', price: 550 },
];

const Products = () => {
  return (
    <section>
      <ComplexTitle title="All Products" />
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
    </section>
  );
};
export default Products;
