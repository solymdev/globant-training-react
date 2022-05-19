import React, { useState } from "react";
import PropTypes from "prop-types";
import "./addSubstract.css";

function getStyleVariantModifier(variant) {
  if (variant === "primary") return "btn--primary";
  if (variant === "secondary") return "btn--secondary";
  return "";
}
function getStyleSizeModifier(size) {
  if (size === "large") return "btn--large";
  if (size === "normal") return "btn--normal";
  return "";
}

const AddSubstract = ({
  initialCount,
  limitCount,
  variant,
  size,
  className,
  onAdd,
  onSubstract,
  ...props
}) => {
  const [counter, setCounter] = useState(initialCount);

  const handleAdd = () => {
    setCounter((prev) => {
      let newCount = limitCount;
      if (prev < limitCount) {
        newCount = prev + 1;
      }
      onAdd(newCount);
      return newCount;
    });
  };

  const handleSubstract = () => {
    setCounter((prev) => {
      let newCount = 0;
      if (prev > 0) {
        newCount = prev - 1;
      }
      onSubstract(newCount);
      return newCount;
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <button
            className={[
              className,
              "Button",
              getStyleVariantModifier(variant),
              getStyleSizeModifier(size),
            ].join(" ")}
            onClick={() => handleSubstract()}
          >
            <p className="control">-</p>
          </button>
        </div>
        <div className="col-sm">
          <p>{counter}</p>
        </div>
        <div className="col-sm">
          <button
            className={[
              className,
              "Button",
              getStyleVariantModifier(variant),
              getStyleSizeModifier(size),
            ].join(" ")}
            onClick={() => handleAdd()}
          >
            <p className="control">+</p>
          </button>
        </div>
      </div>
    </div>
  );
};

AddSubstract.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "normal"]),
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubstract: PropTypes.func.isRequired,
};

export default AddSubstract;
