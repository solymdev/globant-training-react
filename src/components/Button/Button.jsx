import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function getStyleVariantModifier(variant) {
  if (variant === 'primary') return 'btn--primary';
  if (variant === 'secondary') return 'btn--secondary';
  return '';
}
function getStyleSizeModifier(size) {
  if (size === 'large') return 'btn--large';
  if (size === 'normal') return 'btn--normal';
  return '';
}

const Button = ({
  children, variant, size, className, ...props
}) => {
  return <button
    className={
      [className, 'Button',
        getStyleVariantModifier(variant),
        getStyleSizeModifier(size)].join(' ')
    }
    {...props}
  >
    {children}
  </button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'normal']),
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired
}


export default Button;
