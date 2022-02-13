import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import RangeSelectModal from '../RangeSelectModal';
import AlmButton from '../../../widgets/buttons/AlmButton';

import { rangeMods } from './data';

const Range = ({ setRangeAlm, maxRange }) => {
  const [range, setRange] = useState(50);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setRangeAlm(rangeMods[range]);
  }, [range]);

  return (
    <>
      <AlmButton
        text="Range"
        value={range}
        onClick={() => setModal(true)}
      />
      {
          modal && (
          <RangeSelectModal
            range={range}
            maxRange={maxRange}
            setRange={setRange}
            setModal={setModal}
          />
          )
        }
    </>
  );
};

Range.propTypes = {
  maxRange: PropTypes.number.isRequired,
  setRangeAlm: PropTypes.func.isRequired,
};

export default Range;
