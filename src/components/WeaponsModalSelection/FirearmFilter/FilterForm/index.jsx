import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({ heading, children }) => (
  <div>
    <div>{heading}</div>
    <div>
      {children}
    </div>
  </div>
);

FilterForm.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default FilterForm;
