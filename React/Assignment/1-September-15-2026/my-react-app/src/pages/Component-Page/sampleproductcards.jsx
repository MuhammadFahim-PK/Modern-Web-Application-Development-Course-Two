import { useState } from "react"
import Text from "../../components/ui/Text/text"
import ProductCard from "../../components/ui/Cards/Product/productcard"
import productImg from "../../assets/images/product-placeholder.svg"
import { textStyles, productCardStyles } from "../../constant/theme";

const sizeOptions = [
    { value: "s", label: "Small" },
    { value: "m", label: "Medium" },
    { value: "l", label: "Large" },
    { value: "xl", label: "X-Large (sold out)", disabled: true },
];

const colorOptions = [
    { value: "black", label: "Black" },
    { value: "navy", label: "Navy" },
    { value: "olive", label: "Olive (sold out)", disabled: true },
];

function SampleProductCards() {
    const [cartCount, setCartCount] = useState(0)

    // called by ProductCard with { name, price, variant }
    const handleAddToCart = () => setCartCount((cartCount) => cartCount + 1)

    return (
        <section aria-labelledby="demo-product-cards" className="section">
            <Text
                as="h2"
                id="demo-product-cards"
                title="Product Cards"
                className={textStyles.textSubheading}
            />
            <Text
                role="status"
                title={`Cart items: ${cartCount}`}
                className={textStyles.textBody}
            />
            <div className="buttons-box">
                <ProductCard
                    className={productCardStyles.productCardDefault}
                    image={productImg}
                    name="Classic T-Shirt"
                    description="Soft combed cotton with a relaxed fit. Machine washable."
                    price="$29.00"
                    badge="New"
                    variantLabel="Size"
                    variants={sizeOptions}
                    onAddToCart={handleAddToCart}
                />

                <ProductCard
                    className={productCardStyles.productCardShadow}
                    image={productImg}
                    name="Wireless Headphones"
                    description="Over-ear headphones with 30-hour battery life and a built-in microphone."
                    price="$79.00"
                    oldPrice="$99.00"
                    badge="Sale"
                    onAddToCart={handleAddToCart}
                />

                <ProductCard
                    className={productCardStyles.productCardDark}
                    image={productImg}
                    name="City Backpack"
                    description="Water-resistant 20L backpack with a padded laptop sleeve and two side pockets."
                    price="$59.00"
                    variantLabel="Color"
                    variants={colorOptions}
                    onAddToCart={handleAddToCart}
                />

                <ProductCard
                    className={productCardStyles.productCardOutline}
                    image={productImg}
                    name="Steel Water Bottle"
                    description="Insulated bottle that keeps drinks cold for 24 hours."
                    price="$24.00"
                    inStock={false}
                    onAddToCart={handleAddToCart}
                />
            </div>
        </section>
    );
}

export default SampleProductCards;
