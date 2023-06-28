import './navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="logo">.lebo</span>
        <ul className="list">
          <li className="listItem">
            <a href="#home">Home</a>
          </li>
          <li className="listItem">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="listItem">
            <a href="#works">Works</a>
          </li>
          <li className="listItem">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
