import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import WeaponsCardCustomMag from '../WeaponsCardCustomMag';
import WeaponsCardModifyWeight from '../WeaponsCardModifyWeight';
import ButtonSlim from '../widgets/buttons/ButtonSlim';

import '../WeaponsCard/WeaponsCard.css';

const renderModificationOption = (handleModification, ComponentName) => (
  <div style={{ marginLeft: '5rem' }}>
    <ComponentName
      handleModification={handleModification}
    />
  </div>
);

class WeaponsCardModifyWeapon extends Component {
  setPrimaryMag = (index) => {
    const { gunObj, setPrimaryMagazine } = this.props;

    setPrimaryMagazine({ firearm: gunObj.name, magazine: index });
  }

  handleRemoveMod = (modNote) => {
    const { gunObj, removeFirearmModification } = this.props;
    removeFirearmModification({ firearm: gunObj.name, modNote });
  }

  handleAddCustomMag = (newCustomMagazine) => {
    const { addCustomMagazine, gunObj, handleWeaponsCardViews } = this.props;
    addCustomMagazine({ firearm: gunObj.name, magazine: newCustomMagazine });
    handleWeaponsCardViews('createCustomMag');
  }

  handleModifyFirearmWeight = (modNote) => {
    const { modifyFirearm, handleWeaponsCardViews, gunObj } = this.props;
    modifyFirearm({ firearm: gunObj.name, modNote });
    handleWeaponsCardViews('modifyFirearmWeight');
  }

  render() {
    const {
      gunObj,
      createCustomMag,
      modifyFirearmWeight,
      removeAllGunMods,
      toggleCreateCustomMag,
      toggleModifyFirearmWeight,
    } = this.props;

    if (!createCustomMag && !modifyFirearmWeight) {
      return (
        <div style={{ marginLeft: '5rem' }} className="modifyWeaponPanel">
          <div>Modify Weapon</div>
          <button
            type="button"
            className="removeAllMods"
            onClick={removeAllGunMods.bind(this)}
          >
            Remove All Mods
          </button>

          <div className="modifyMagazines">
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: '5px', paddingTop: '5px' }}>Magazines</div>
              <div>
                <ButtonSlim
                  name="+"
                  id="addCustomMagazine"
                  onClick={toggleCreateCustomMag}
                />
              </div>
            </div>
            {gunObj.mag.map((magObj, index) => (
              <div key={`${magObj.cap}${magObj.weight}`}>
                {`${magObj.cap} round ${magObj.type}`}
                {`${magObj.weight} lbs`}
                {index > 0
                  ? <button type="button" id={`${gunObj.name}MagAtIndex${index}`} onClick={this.setPrimaryMag.bind(this, index)} style={{ opacity: '0.6' }}>primary</button>
                  : <button type="button" id={`${gunObj.name}MagAtIndex${index}`}>primary</button>
                                }
              </div>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ paddingTop: '5px' }}>Weight</div>
            <div style={{ marginLeft: '5px', paddingTop: '4px', display: 'inline-block', height: '5px' }}>
              <ButtonSlim
                name="set"
                id="modifyWeaponWeight"
                onClick={toggleModifyFirearmWeight}
              />
            </div>

          </div>
          {gunObj.modNotes
            && gunObj.modNotes.map(noteObj => (
              <div key={`${noteObj.note}${noteObj.weightMod}`}>
                <span>{noteObj.note}</span>
                <span>
                  {`${noteObj.weightMod} lbs`}
                </span>
                <button
                  type="submit"
                  className="removeModification"
                  onClick={this.handleRemoveMod.bind(this, noteObj)}
                >
                  remove
                </button>
              </div>
            ))
          }
        </div>
      );
    }
    if (createCustomMag) {
      return (
        renderModificationOption(this.handleAddCustomMag, WeaponsCardCustomMag)
      );
    }
    return (
      renderModificationOption(this.handleModifyFirearmWeight, WeaponsCardModifyWeight)
    );
  }
}

WeaponsCardModifyWeapon.propTypes = {
  modifyFirearm: PropTypes.func,
  addCustomMagazine: PropTypes.func,
  setPrimaryMagazine: PropTypes.func,
  removeFirearmModification: PropTypes.func,
  createCustomMag: PropTypes.bool,
  modifyFirearmWeight: PropTypes.bool,
  removeAllGunMods: PropTypes.func,
  toggleCreateCustomMag: PropTypes.func,
  toggleModifyFirearmWeight: PropTypes.func,
  handleWeaponsCardViews: PropTypes.func,
  gunObj: gunObjShape,
};

export default WeaponsCardModifyWeapon;
