import { useEffect, useState } from "react";
import "./Product.css";
import { Link, useSearchParams } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [searchparams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    setProducts(data);
  };
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "green" }}>Products Component</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        asperiores alias at temporibus minima exercitationem? Deleniti harum
        aliquid unde corrupti inventore id ea laudantium voluptas dignissimos
        repudiandae explicabo reprehenderit error laborum dolore velit
        doloremque quis expedita ex aperiam temporibus esse, quasi commodi
        facere quos. Obcaecati veniam recusandae nam perspiciatis alias commodi
        ea cumque soluta minus quisquam. Sed quasi laboriosam pariatur a
        repudiandae, delectus minima quod natus, quos tempora totam alias ut, id
        dolorum. Temporibus explicabo hic in dolore numquam, quaerat laborum
        provident, tempora quibusdam et minus cumque animi, iste eum tenetur
        aspernatur similique voluptatum vero. Dicta aperiam adipisci sunt a?
      </p>
      {products.length > 0 && (
        <div className="container">
          {products.map((product) => {
            return (
              <div className="card">
                <img src={product.image} width="100%" height="300" />
                <h3>{product.title}</h3>
                <p>Price:$ {product.price} </p>
                {/* <Link to={`/productdetails/${product.id}`}><button>Product Details</button></Link> */}
                <Link to="/queryparams">
                  <button
                    onClick={() => {
                      setSearchParams({ name: "kabir" });
                    }}
                  >
                    Product Details
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
