import { useState } from "react";
import Button from "../../Button/button";
import Select from "../../Select/select";
import { btnStyles } from "../../../../constant/theme";
import "./ProductCard.css";

/*
  USAGE
  <ProductCard
    image={productImg}                      // required
    imageAlt="Blue cotton t-shirt"          // optional, the product name is used when missing
    name="Classic T-Shirt"
    description="Soft cotton, relaxed fit."
    price="$29.00"                          // text shown as-is (add the currency yourself)
    oldPrice="$39.00"                       // optional, shown crossed out
    badge="Sale"                            // optional label on the image
    variantLabel="Size"                     // label of the variant dropdown
    variants={[                             // optional, no dropdown when empty
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "xl", label: "X-Large (sold out)", disabled: true },
    ]}
    inStock={true}                          // false -> disabled "Out of stock" button
    buttonTitle="Add to cart"               // optional
    onAddToCart={(item) => console.log(item)}   // item = { name, price, variant }
    className={productCardStyles.productCardShadow}  // optional, default = "product-card-default"
  />

  When the product has variants, the button asks the customer to choose one first.
*/

function ProductCard({
  image,
  imageAlt,
  name,
  description,
  price,
  oldPrice,
  badge,
  variantLabel = "Option",
  variants = [],
  inStock = true,
  buttonTitle = "Add to cart",
  onAddToCart,
  className = "product-card-default",
  headingTag: Heading = "h3",
}) {
  const [variant, setVariant] = useState("");
  const [error, setError] = useState("");

  const handleVariantChange = (e) => {
    setVariant(e.target.value);
    setError("");
  };

  const handleAddToCart = () => {
    if (variants.length > 0 && !variant) {
      setError(`Please choose a ${variantLabel.toLowerCase()}`);
      return;
    }

    setError("");
    if (onAddToCart) onAddToCart({ name, price, variant });
  };

  return (
    <article className={`product-card ${className}`}>
      <div className="product-card-image-box">
        <img
          className="product-card-image"
          src={image}
          alt={imageAlt ?? name}
          width="320"
          height="240"
          loading="lazy"
        />
        {badge && <span className="product-card-badge">{badge}</span>}
      </div>

      <div className="product-card-body">
        <Heading className="product-card-name">{name}</Heading>

        {description && (
          <p className="product-card-description">{description}</p>
        )}

        <p className="product-card-price">
          <span className="product-card-sr">Price: </span>
          {price}
          {oldPrice && (
            <del className="product-card-old-price">
              <span className="product-card-sr">Original price: </span>
              {oldPrice}
            </del>
          )}
        </p>

        {variants.length > 0 && (
          <div className="product-card-variant">
            <Select
              label={variantLabel}
              options={variants}
              placeholder={`Choose a ${variantLabel.toLowerCase()}`}
              value={variant}
              onChange={handleVariantChange}
              error={error}
              disabled={!inStock}
            />
          </div>
        )}

        <div className="product-card-action">
          <Button
            className={inStock ? btnStyles.btnFilled : btnStyles.btnDisabled}
            title={inStock ? buttonTitle : "Out of stock"}
            onClick={handleAddToCart}
            disabled={!inStock}
            type="button"
          />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
