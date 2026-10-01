import { NavLink } from "react-router-dom";
import "./Navigation.css";

/*
  Persistent top navigation, rendered once above <Routes> in main.jsx so it
  stays visible across every page. NavLink (not plain Button) is used here
  on purpose: these are real links — right-click "open in new tab", browser
  back/forward, and search-engine crawling all depend on an actual <a href>,
  which a <button onClick={navigate}> does not give you.
*/

const NAV_LINKS = [
  { to: "/", label: "Poll", end: true }, // end: true — otherwise "/" would stay highlighted on every route
  { to: "/blog", label: "Blog" },
];

function Navigation() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-list">
        {NAV_LINKS.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link-active" : ""}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
