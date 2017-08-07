import React from 'react';
import PropTypes from 'prop-types';

const RenderAny = ({ children, style }) => {
  if (typeof children === 'function') {
    return <div style={style}>children()</div>;
  }
  if (typeof children === 'object' && Array.isArray(children)) {
    return <div style={style}>{children}</div>;
  }
  return children;
};

RenderAny.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  style: PropTypes.shape({}),
};

export default RenderAny;
