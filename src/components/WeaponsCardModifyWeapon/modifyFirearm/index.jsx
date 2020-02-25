import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../../helpers/proptypeShapes';

import CheckBox from '../../widgets/buttons/CheckBox';
import ClickButton from '../../widgets/buttons/ClickButton';

import { magazineTableHeadings } from '../data';
import ButtonSlim from '../../widgets/buttons/ButtonSlim';

const ModifyFirearm = ({ firearmName, modNotes, removeFirearmModification }) => (
);


ModifyFirearm.propTypes = {
//   firearmName: PropTypes.string.isRequired,
//   modNotes: PropTypes.arrayOf(PropTypes.object),
//   removeFirearmModification: PropTypes.func.isRequired,
};

ModifyFirearm.defaultProps = {
//   modNotes: [],
};

export default ModifyFirearm;
