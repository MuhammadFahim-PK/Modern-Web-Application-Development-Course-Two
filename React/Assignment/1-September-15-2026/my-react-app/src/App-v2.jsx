import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from "./components/ui/Button/button"
import { btnStyles, colors, fontFamilies, fontWeights, textAlign } from "./constant/theme";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
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
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section className="buttons-box">
        <Button
          className={btnStyles.btnFilled}
          title="Filled"
          onClick={() => console.log("filled clicked")}
        />

        <Button
          className={btnStyles.btnOutline}
          title="Outline"
          onClick={() => console.log("outline clicked")}
        />

        <Button
          className={btnStyles.btnWhite}
          title="White"
          onClick={() => console.log("white clicked")}
        />

        <Button
          className={btnStyles.btnPill}
          title="Pill"
          onClick={() => console.log("pill clicked")}
        />

        <Button
          className={btnStyles.btnGhost}
          title="Ghost"
          onClick={() => console.log("ghost clicked")}
        />

        <Button
          className={btnStyles.btnShadow}
          title="Shadow"
          onClick={() => console.log("shadow clicked")}
        />

        <Button
          className={btnStyles.btnGradient}
          title="Gradient"
          onClick={() => console.log("gradient clicked")}
        />

        <Button
          className={btnStyles.btn3D}
          title="3D Button"
          onClick={() => console.log("3D clicked")}
        />

        <Button
          className={btnStyles.btnText}
          title="Text Button"
          onClick={() => console.log("text clicked")}
        />

        <Button
          className={btnStyles.btnHover}
          title="Hover Button"
          onClick={() => console.log("hover clicked")}
        />

        <Button
          className={btnStyles.btnDanger}
          title="Delete"
          onClick={() => console.log("delete clicked")}
        />

        <Button
          className={btnStyles.btnSuccess}
          title="Success"
          onClick={() => console.log("success clicked")}
        />

        <Button
          className={btnStyles.btnDisabled}
          title="Disabled"
          onClick={() => console.log("disabled clicked")}
        />

        <Button
          className={btnStyles.btnRounded}
          title="Rounded"
          onClick={() => console.log("rounded clicked")}
        />

        <Button
          className={btnStyles.btnBorder}
          title="Border"
          onClick={() => console.log("border clicked")}
        />

        <Button
          className={btnStyles.btnGlow}
          title="Glow"
          onClick={() => console.log("glow clicked")}
        />

        <Button
          className={btnStyles.btnTransparent}
          title="Transparent"
          onClick={() => console.log("transparent clicked")}
        />

        <Button
          className={btnStyles.btnScale}
          title="Scale"
          onClick={() => console.log("scale clicked")}
        />

        <Button
          className={btnStyles.btnEffect}
          title="Effect"
          onClick={() => console.log("effect clicked")}
        />

        <Button
          className={btnStyles.btnLink}
          title="Link Button"
          onClick={() => console.log("link clicked")}
        />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
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
      <section id="spacer"></section>
    </>
  )
}

export default App
