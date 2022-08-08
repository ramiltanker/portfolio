import React from "react";
import { Link } from "react-scroll";
import { openModal } from "../../utils/openModal";

type ButtonPropsType = {
  text: string;
  abs?: () => void;
};

export const Button: React.FC<ButtonPropsType> = ({ text, abs }) => {
  if (abs) {
    return (
      <button className="button" onClick={() => abs && openModal(abs)}>
        {text}
      </button>
    );
  } else {
    return (
      <Link
        className="button"
        ignoreCancelEvents
        to="contacts"
        spy
        smooth
        offset={-100}
      >
        {text}
      </Link>
    );
  }
};
