import React from 'react';
import PropTypes from 'prop-types';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import './BodyArmourSelection.css';

const tableBodyStyles = {
  border: '1px solid black',
};
const renderHeading = armourType => (armourType === 'Helmet' ? 'Select Helmet' : 'Select Vest');

const renderBody = (armourList, handleDispatch, type) => armourList.map(armour => (
  <React.Fragment key={armour.name}>
    <tr
      className={`${armour.name}Row bodyArmourRow`}
      onClick={() => handleDispatch(type, armour)}
    >
      <td style={{ textAlign: 'left' }}>{armour.name}</td>
      <td>{armour.pf}</td>
      <td>{armour.bpf}</td>
      <td>{armour.ac.toUpperCase()}</td>
      <td>{armour.weight}</td>
      <td style={{ textAlign: 'left' }}>{armour.tags.join(', ')}</td>
    </tr>
  </React.Fragment>
));

const BodyArmourSelection = ({ armourType, armourList, handleDispatch }) => (
  <div className="equipmentModalContainer selectBodyArmourModal">
    <div className="bodyArmourListCard">
      <div className="equipmentListHeader bodyArmourListHeading">
        {renderHeading(armourType)}
        <div style={{ marginLeft: '5px' }}>
          <ButtonStandard
            name="Back"
            onClick={() => handleDispatch(null)}
            className="exitBodyArmourSlection"
          />
          <ButtonStandard
            name="Remove"
            onClick={() => handleDispatch(armourType, null)}
            className="removeBodyArmour"
          />
        </div>
      </div>
      <table className="bodyArmourTable">
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th className="armourCol">PF</th>
            <th>BPF</th>
            <th>AC</th>
            <th>lbs</th>
            <th style={{ textAlign: 'left' }}>Notes</th>
          </tr>
        </thead>
        <tbody style={tableBodyStyles}>
          {renderBody(armourList, handleDispatch, armourType)}
        </tbody>
      </table>
    </div>
  </div>
);

BodyArmourSelection.propTypes = {
  handleDispatch: PropTypes.func,
  armourList: PropTypes.arrayOf(PropTypes.object),
  armourType: PropTypes.string,
};

export default BodyArmourSelection;
