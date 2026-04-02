import React from "react";

function CTAButton({ text, onClick }) {
  return (
    <button className="cta-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default CTAButton; 