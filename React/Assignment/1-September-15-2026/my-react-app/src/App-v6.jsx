import { useState } from "react"
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import avatarImg from './assets/images/avatar-placeholder.svg'
import productImg from './assets/images/product-placeholder.svg'
import Button from "./components/ui/Button/button"
import Input from "./components/ui/Input/input"
import Select from "./components/ui/Select/select"
import UserCard from "./components/ui/Cards/User/usercard"
import ProductCard from "./components/ui/Cards/Product/productcard"
import BlogPosts from "./pages/BlogPosts/blogposts"
import SampleButton from "./pages/Component-Page/samplebutton"
import SampleCounter from "./pages/Component-Page/samplecounter"
import {
  btnStyles,
  inputStyles,
  selectStyles,
  textStyles,
  userCardStyles,
  productCardStyles,
  colors,
  fontFamilies,
  fontSizes,
  fontStyles,
  fontWeights,
  textAlign,
} from "./constant/theme";
import './App.css'

const countryOptions = [
  { value: "pk", label: "Pakistan" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
];

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

function App() {
  const [count, setCount] = useState(0)
  const [fullName, setFullName] = useState("")
  const [country, setCountry] = useState("")
  const [counter, setCounter] = useState(0)

  const [cartCount, setCartCount] = useState(0)

  // called by ProductCard with { name, price, variant }
  const handleAddToCart = () => setCartCount((cartCount) => cartCount + 1)

  return (
    <>
      <section id="center" className="section">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
      </section>

      <SampleCounter />

      <SampleButton />

      <section id="demo-blog" className="section">
        <BlogPosts />
      </section>


      <section aria-labelledby="demo-inputs" className="section">
        <Text
          as="h2"
          id="demo-inputs"
          title="Inputs"
          className={textStyles.textSubheading}
        />
        <div className="buttons-box">
          <Input
            className={inputStyles.inputDefault}
            label="Full name"
            name="fullName"
            placeholder="Enter your full name"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            className={inputStyles.inputOutline}
            label="Email"
            type="email"
            placeholder="name@example.com"
            helperText="We never share your email"
          />

          <Input
            className={inputStyles.inputFilled}
            label="Search"
            type="search"
            placeholder="Search components"
          />

          <Input
            className={inputStyles.inputUnderline}
            label="Username"
            placeholder="Choose a username"
          />

          <Input
            className={inputStyles.inputRounded}
            label="City"
            placeholder="Enter your city"
          />

          <Input
            className={inputStyles.inputPill}
            label="Company"
            placeholder="Enter your company"
          />

          <Input
            className={inputStyles.inputSuccess}
            label="Username"
            defaultValue="fahim_dev"
            helperText="Username is available"
          />

          <Input
            className={inputStyles.inputDefault}
            label="Work email"
            type="email"
            defaultValue="name@"
            error="Enter a valid email address"
          />

          <Input
            className={inputStyles.inputDark}
            label="Coupon code"
            placeholder="Enter your code"
          />

          <Input
            className={inputStyles.inputGlow}
            label="Phone"
            type="tel"
            placeholder="+00 000 0000000"
            autoComplete="tel"
          />

          <Input
            className={inputStyles.inputLarge}
            label="Website"
            type="url"
            placeholder="https://example.com"
          />

          <Input
            className={inputStyles.inputDefault}
            label="Password"
            type="password"
            helperText="At least 8 characters"
            autoComplete="new-password"
            required
          />

          <Input
            className={inputStyles.inputDefault}
            label="Disabled"
            defaultValue="Not editable"
            disabled
          />
        </div>
      </section>

      <section aria-labelledby="demo-selects" className="section">
        <Text
          as="h2"
          id="demo-selects"
          title="Selects"
          className={textStyles.textSubheading}
        />
        <div className="buttons-box">
          <Select
            className={selectStyles.selectDefault}
            label="Country"
            options={countryOptions}
            placeholder="Choose a country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <Select
            className={selectStyles.selectOutline}
            label="Outline"
            options={countryOptions}
            placeholder="Choose a country"
          />

          <Select
            className={selectStyles.selectFilled}
            label="Filled"
            options={countryOptions}
            placeholder="Choose a country"
          />

          <Select
            className={selectStyles.selectUnderline}
            label="Underline"
            options={countryOptions}
            placeholder="Choose a country"
          />

          <Select
            className={selectStyles.selectRounded}
            label="Rounded"
            options={countryOptions}
            placeholder="Choose a country"
          />

          <Select
            className={selectStyles.selectPill}
            label="Pill"
            options={countryOptions}
            placeholder="Choose a country"
          />

          <Select
            className={selectStyles.selectSuccess}
            label="Success"
            options={countryOptions}
            defaultValue="pk"
            helperText="Looks good"
          />

          <Select
            className={selectStyles.selectDark}
            label="Dark"
            options={countryOptions}
            placeholder="Choose a country"
          />

          <Select
            className={selectStyles.selectDefault}
            label="Delivery country"
            options={countryOptions}
            placeholder="Choose a country"
            error="Please choose a country"
            required
          />

          <Select
            className={selectStyles.selectDefault}
            label="Disabled"
            options={countryOptions}
            defaultValue="ae"
            disabled
          />
        </div>
      </section>

      <section aria-labelledby="demo-text" className="section">
        <Text
          as="h2"
          id="demo-text"
          title="Text"
          className={textStyles.textSubheading}
        />
        <div style={{ display: "grid", justifyItems: "center", gap: 12 }}>
          <Text as="h3" title="Heading text" className={textStyles.textHeading} />
          <Text as="h3" title="Subheading text" className={textStyles.textSubheading} />
          <Text title="Body text" className={textStyles.textBody} />
          <Text title="Caption text" className={textStyles.textCaption} />
          <Text title="Muted text" className={textStyles.textMuted} />
          <Text title="Highlight text" className={textStyles.textHighlight} />
          <Text title="Gradient text" className={textStyles.textGradient} fontSize={fontSizes.xl} fontWeight={fontWeights.bold} />
          <Text title="Underline text" className={textStyles.textUnderline} />
          <Text
            title="Truncate text: this sentence is far too long for the box it sits in"
            className={textStyles.textTruncate}
            style={{ maxWidth: 240 }}
          />
          <Text title="Danger text" className={textStyles.textDanger} />
          <Text title="Success text" className={textStyles.textSuccess} />
          <Text
            title="Custom text from theme constants"
            color={colors.primary}
            fontSize={fontSizes.xl}
            fontWeight={fontWeights.semibold}
            fontFamily={fontFamilies.serif}
            fontStyle={fontStyles.italic}
            textAlign={textAlign.center}
          />
        </div>
      </section>

      <section aria-labelledby="demo-user-cards" className="section">
        <Text
          as="h2"
          id="demo-user-cards"
          title="User cards"
          className={textStyles.textSubheading}
        />
        <div className="buttons-box">
          <UserCard
            className={userCardStyles.userCardDefault}
            image={avatarImg}
            name="Sara Ahmed"
            role="Product Designer"
            email="sara.ahmed@example.com"
            phone="+1 555 0100"
            city="Lisbon"
            age={28}
          />

          <UserCard
            className={userCardStyles.userCardOutline}
            name="Daniel Carter"
            role="Frontend Developer"
            email="daniel.carter@example.com"
            phone="+1 555 0101"
            city="Denver"
            age={34}
          />

          <UserCard
            className={userCardStyles.userCardShadow}
            image={avatarImg}
            name="Mei Tanaka"
            role="Data Analyst"
            email="mei.tanaka@example.com"
            phone="+1 555 0102"
            city="Osaka"
            age={31}
          />

          <UserCard
            className={userCardStyles.userCardDark}
            image={avatarImg}
            name="Omar Hassan"
            role="Project Manager"
            email="omar.hassan@example.com"
            phone="+1 555 0103"
            city="Cairo"
            age={39}
          />

          <UserCard
            className={userCardStyles.userCardHorizontal}
            image={avatarImg}
            name="Lena Fischer"
            role="Support Lead"
            email="lena.fischer@example.com"
            phone="+1 555 0104"
            city="Berlin"
            age={42}
            details={[{ label: "Company", value: "Northwind" }]}
          />
        </div>
      </section>

      <section aria-labelledby="demo-product-cards" className="section">
        <Text
          as="h2"
          id="demo-product-cards"
          title="Product cards"
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



      <div className="ticks"></div>

      <section id="next-steps" className="section">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer" className="section"></section>
    </>
  )
}

export default App
