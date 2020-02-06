import React from 'react';
import PropTypes from 'prop-types';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import './BodyArmourSelection.css';

const renderHeading = armourType => (armourType === 'helmet' ? 'Select Helmet' : 'Select Vest');

const renderBody = (armourList, handleDispatch, type) => armourList.map(armour => (
  <React.Fragment key={armour.name}>
    <tr
      className={`${armour.name}Row --tableRow`}
      onClick={() => handleDispatch(type, armour)}
    >
      {['name', 'pf', 'bpf', 'ac', 'weight', 'tags'].map((value) => (
        <td key={value}>{Array.isArray(armour[value]) ? armour[value].join(', ') : armour[value]}</td>
      ))}
    </tr>
  </React.Fragment>
));

const BodyArmourSelection = ({ armourType, armourList, handleDispatch }) => (
  <div className="equipmentModalContainer selectBodyArmourModal">
    <div className="--card bodyArmourListCard">
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
            {['Name', 'PF', 'BPF', 'AC', 'lbs', 'Notes'].map((value) => (
              <th>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
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
