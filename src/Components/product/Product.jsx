import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
