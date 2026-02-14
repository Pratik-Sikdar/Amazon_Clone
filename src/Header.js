import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <span className="material-symbols-outlined header_logoImage">
          local_convenience_store
        </span>
        <h2 className="header_logoTitle">A Clone</h2>
      </div>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <span className="material-symbols-outlined header_searchIcon">
          search
        </span>
      </div>

      <div className="header_nav">
        <div className="nav_items">
          <span className="nav_item_lineOne">Hello Guest</span>
          <span className="nav_item_lineTwo">Sign In</span>
        </div>
        <div className="nav_items">
          <span className="nav_item_lineOne">Your</span>
          <span className="nav_item_lineTwo">Shop</span>
        </div>
        <div className="nav_items basket">
          <span className="nav_item_lineOne ">Basket</span>
          <span className="material-symbols-outlined">shopping_basket</span>
          <span className="nav_item_lineTwo basket_count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
