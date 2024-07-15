import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import footer from "./footer.json";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {footer.map((footerItem) => (
            <li className="nav-item" key={footerItem.id}>
              <a href={footerItem.link || "#"} className="nav-link px-2 text-body-secondary">
                {footerItem.text}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center text-body-secondary"> Abhishek||© 2024 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;


