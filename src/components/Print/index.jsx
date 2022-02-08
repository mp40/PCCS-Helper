import React from 'react';

import IconButton from '../widgets/buttons/IconButton';
import GameSheet from '../GameSheet';

import { DispatchContext } from '../App/context';
import { showModal } from '../App/actions';

const Print = () => {
  const dispatch = React.useContext(DispatchContext);

  return (
    <IconButton
      type="print"
      onClick={() => dispatch(showModal(GameSheet))}
    />
  );
};

export default Print;
