import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from '../BodyArmourSelection/helmet';
import Vest from '../BodyArmourSelection/vest';

import { DispatchContext } from '../App/context';
import { showModal } from '../App/actions';

import { helmets, vests } from '../../data/uniformAndArmourTypes';

const BodyArmourCard = ({ helmet, vest }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="card-standard">
      <table>
        <thead>
          <tr>
            <th className="--tableHeading">Body Armour</th>
            <th className="--tableValue">lbs</th>
          </tr>
        </thead>
        <tbody>
          <tr className="--selectableRow" onClick={() => dispatch(showModal(Helmet))}>
            <td>{helmets[helmet].name}</td>
            <td>{helmets[helmet].weight}</td>
          </tr>
          <tr className="--selectableRow" onClick={() => dispatch(showModal(Vest))}>
            <td>{vests[vest].name}</td>
            <td>{vests[vest].weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

BodyArmourCard.propTypes = {
  helmet: PropTypes.string,
  vest: PropTypes.string,
};

BodyArmourCard.defaultProps = {
  helmet: 'No Helmet',
  vest: 'No Vest',
};

export default BodyArmourCard;
