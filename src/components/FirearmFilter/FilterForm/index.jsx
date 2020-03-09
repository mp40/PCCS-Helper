import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({ heading, classNameValue, children }) => (
  <div>
    <div>{heading}</div>
    <div className={classNameValue}>
      {children}
    </div>
  </div>
);

FilterForm.propTypes = {
  heading: PropTypes.string.isRequired,
  classNameValue: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default FilterForm;
