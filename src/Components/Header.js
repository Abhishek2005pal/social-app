//Header.js

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BiAtom } from "react-icons/bi";
import footer from "./footer.json";

const Header = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <BiAtom style={{ width: "50px", height: "50px", color: "white" }} />
          {
            footer.map((footerItem, id) => (
              <li key={footerItem.id}>
                <a href="#" className="nav-link px-2 text-secondary">{footerItem.text}</a>
              </li>
            ))
          }
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search For" aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
