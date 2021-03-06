function Header() {
    return (
      <nav className="#673ab7 deep-purple">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/EvgenyMozh/react-shop" terget='_blank' rel="noreferrer">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export { Header };