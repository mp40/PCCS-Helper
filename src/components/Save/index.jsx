import React from 'react';

import IconButton from '../widgets/buttons/IconButton';
import SaveModal from './modal';

import { DispatchContext } from '../App/context';
import { showModal } from '../App/actions';

const Save = () => {
  const dispatch = React.useContext(DispatchContext);

  return (
    <IconButton
      type="save"
      onClick={() => dispatch(showModal(SaveModal))}
    />
  );
};

export default Save;
