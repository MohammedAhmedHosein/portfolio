import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => {
          setshowModal(true);
        }}
      />
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="moon flex">
        <span className="icon-moon"></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => setshowModal(false)}
                className="icon-close"
              />
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
