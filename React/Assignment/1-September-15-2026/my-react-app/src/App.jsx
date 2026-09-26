import { useState, useEffect } from "react"
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from "./components/ui/Button/button"
import BlogPosts from "./pages/BlogPosts/blogposts"
import SampleButton from "./pages/Component-Page/samplebutton"
import SampleCounter from "./pages/Component-Page/samplecounter"
import SampleForm from "./pages/Component-Page/sampleform"
import SampleText from "./pages/Component-Page/sampletext"
import SampleUserCards from "./pages/Component-Page/sampleusercards"
import SampleProductCards from "./pages/Component-Page/sampleproductcards"
import { btnStyles } from "./constant/theme";
import './App.css'

// one entry per switchable section: the button label, and the component it shows
const SECTIONS = [
  { key: "counter", label: "Counter", Component: SampleCounter },
  { key: "buttons", label: "Buttons", Component: SampleButton },
  { key: "blog", label: "Blog", Component: BlogPosts },
  { key: "form", label: "Form", Component: SampleForm },
  { key: "text", label: "Text", Component: SampleText },
  { key: "user-cards", label: "User Cards", Component: SampleUserCards },
  { key: "product-cards", label: "Product Cards", Component: SampleProductCards },
];

const STORAGE_KEY = "activeSection";

function App() {
  // read the last-viewed section once, on first render (falls back to the first tab)
  const [activeSection, setActiveSection] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return SECTIONS.some((section) => section.key === saved) ? saved : SECTIONS[0].key;
    } catch {
      return SECTIONS[0].key;
    }
  });

  // side effects that should re-run whenever the active section changes:
  // update the browser tab title, and remember the choice for next time
  useEffect(() => {
    const current = SECTIONS.find((section) => section.key === activeSection);
    document.title = current ? `Demo — ${current.label}` : "Demo";

    try {
      localStorage.setItem(STORAGE_KEY, activeSection);
    } catch {
      // localStorage can be unavailable (private browsing, storage full); the
      // page still works, it just won't remember the choice next time
    }
  }, [activeSection]);

  const ActiveComponent = SECTIONS.find((section) => section.key === activeSection)?.Component;

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

      <nav className="section section-nav" aria-label="Demo sections">
        {SECTIONS.map(({ key, label }) => (
          <Button
            key={key}
            title={label}
            className={activeSection === key ? btnStyles.btnFilled : btnStyles.btnOutline}
            aria-pressed={activeSection === key}
            onClick={() => setActiveSection(key)}
          />
        ))}
      </nav>

      {ActiveComponent && <ActiveComponent />}

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
