import * as React from "react";

const Dot = (props) => (
  <svg
    width="10px"
    height="10px"
    viewBox="0 0 24 24"
    fill="#C18585"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);

export default Dot;
