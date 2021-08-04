import React from "react";

import "../Styles/styles.css";

function Button({ children, onClick }) {
  return (
    <div className="containerBtn-loadMore">
      <button className="Button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
export default Button;