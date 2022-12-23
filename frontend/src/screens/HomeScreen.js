import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import data from '../data';
import Rating from '@mui/material/Rating';
function HomeScreen() {
  return (
    <div>
      <h1>Features Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <Rating rsting ={product.rating} numReviews={product.numReviews}/>
              <p>
                <strong>${product.price}</strong>
              </p>
              <div>
                <Button >Add to cart </Button>
                <pl>0</pl>
              </div>
              <Button>Remove from cart </Button>
              <pl>0</pl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
