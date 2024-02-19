import { unstable_batchedUpdates } from "react-dom";
import "./index.css";
import InOffertIcon from "../../assets/in-offert-icon.svg";
import { applyDiscount } from "../../utils/applyDiscount";
import CartContext from "../../context/cartContext";
import { useContext } from "react";
import ProductQuantityController from "../Cart/ProductQuantityController";

function ProductCard({
  id,
  isInStore = false,
  product_name,
  precio,
  descuento,
  promotion,
  promotion_full_info,
  product_img1,
  onClick,
}) {
  const { productsCart, addProductToCart, checkProductInCart, restProductFromCart } = useContext(CartContext);
  return (
    <section className="product-card" id={id}>
      <div className="img-container" onClick={onClick}>
        <img loading="lazy" src={product_img1} alt={product_name} />
      </div>
      {promotion ? (
        <abbr title="En oferta">
          <img className="in-offert-icon" src={InOffertIcon} alt="En Oferta" />
        </abbr>
      ) : null}
      <div className="name-and-price-container" onClick={onClick}>
        <p className="product-card-name">{product_name}</p>
        {promotion || descuento > 0 ? (
          <p className="card-text price price-with-discount">
            <span className="new-price">
              $
              {applyDiscount({
                price: precio,
                promotion: promotion_full_info,
                discount: descuento,
              }).toFixed(2)}
            </span>
            <span className="original-price">${precio.toFixed(2)}</span>
          </p>
        ) : (
          <p className="card-text price">${precio.toFixed(2)}</p>
        )}
      </div>
      {isInStore ? (
        <div className="add-to-cart-section">
          {checkProductInCart(id) ? (
            <ProductQuantityController 
            item={{
              id:id,
              productName:product_name,
              price:applyDiscount({
                price: precio,
                promotion: promotion_full_info,
                discount: descuento,
              }),
              img1:product_img1,
              }}
              add={addProductToCart}
              rest={restProductFromCart}
              quantity={productsCart.find(product => product.id == id)?.quantity}
              />
              
          ) : (
            <button
              className="add-to-cart-button"
              onClick={() =>
                addProductToCart({
                  id: id,
                  productName: product_name,
                  price: applyDiscount({
                    price: precio,
                    promotion: promotion_full_info,
                    discount: descuento,
                  }),
                  img1: product_img1,
                })
              }
            >
              Agregar al carrito
            </button>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default ProductCard;
